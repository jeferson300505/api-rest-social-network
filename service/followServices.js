import Follow from "../models/follow.js";

export const followUserIds = async (req, res) => {
  try {
    // Obtener el ID del usuario autenticado
    const identityUserId = req.user.userId;

    // En caso de llegar el userID
    if(!identityUserId) {
      return res.status(400).send({
        status: "error",
        message: "Usuario no recibido"
      });
    }

    // Obtener el array con la información de los usuarios que estoy siguiendo (el usuario autenticado está siguiendo)
    let following = await Follow.find({ "following_user": identityUserId})
      .select({"followed_user": 1, "_id": 0})
      .exec();

    // Obtener el array con la información de los usuarios que me siguen a mi (los usuarios que siguen al usuario autenticado)
    let followers = await Follow.find({ "followed_user": identityUserId})
      .select({"following_user": 1, "_id": 0})
      .exec();

    // Procesar array de identificadores: convertirlos en un array de solo IDS
    const user_following = following.map(follow => follow.followed_user);
    const user_follow_me = followers.map(follow => follow.following_user);

    return {
      following: user_following,
      followers: user_follow_me
    }

  } catch (error) {
    // devuelve un objeto vacío
    return {
      following: [],
      followers: []
    };
  }
}