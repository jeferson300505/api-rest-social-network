import { Schema, model} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const UserSchema = Schema({
  name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  nick: {
    type: String,
    required: true
  },
  bio: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "role_user"
  },
  image: {
    type: String,
    default: "default.png"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Añadir pluggin de paginación
UserSchema.plugin(mongoosePaginate);

export default model("User", UserSchema, "users");