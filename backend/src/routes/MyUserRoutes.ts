import express from 'express';
import MyUserController from '../controller/MyUserController';


const router = express.Router();
// /api/my/user
router.post("/", MyUserController.createCurrentUSer);

export default router;