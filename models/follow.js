import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const FollowSchema = Schema({
  following_user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true
  },
  followed_user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Definir índice único compuesto para followin_user y followed_user
FollowSchema.index({ following_user: 1, followed_user: 1}, {unique: true});

// Añadir pluggin de paginación
FollowSchema.plugin(mongoosePaginate);

export default model("Follow", FollowSchema, "follows");
