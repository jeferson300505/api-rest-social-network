import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = async() => {

  try {
    await connect(process.env.MONGODB_URI);
    console.log("Conectado correctamente a la BD: bd_socialnet");
  } catch (error) {
    console.log(error);
    throw new error("¡No se ha podido conectar a la base de datos!");
  }

}

export default connection;