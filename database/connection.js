import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Carga las variables de entorno desde el archivo .env

const connection = async () => {
  try {
    await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,  // Opciones recomendadas para evitar warnings
      useUnifiedTopology: true,
    });
    console.log("Conectado correctamente a la BD: bd_socialnet");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
    throw new Error("¡No se ha podido conectar a la base de datos!");
  }
}

export default connection;