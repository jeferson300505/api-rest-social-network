// Importaciones
import { Router } from "express";
const router = Router();
import { register, testUser, login, profile, listUsers, updateUser,uploadFiles, avatar} from "../controllers/user.js";
import { ensureAuth } from '../middlewares/auth.js'
import multer from "multer";

// Configuración de subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/avatars/");
  },
  filename: (req, file, cb) => {
    cb(null, "avatar-"+Date.now()+"-"+file.originalname);
  }
});

// Middleware para subida de archivos
const uploads = multer({storage});

// Definir las rutas
router.get('/test-user', ensureAuth, testUser);
router.post('/register', register);
router.post('/login', login);
router.get('/profile/:id', ensureAuth, profile);
router.get('/list/:page?', ensureAuth, listUsers);
router.post('/update', ensureAuth, updateUser);
router.post('/upload', [ensureAuth, uploads.single("file0")], uploadFiles);
router.get('/avatar/:file?', ensureAuth, avatar);

// Exportar el Router
export default router;