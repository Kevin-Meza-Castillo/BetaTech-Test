import { Router } from "express";
import { createUser, deleteUser, listByUser, listUsers, login } from "../controllers/user.controller";
import { validarJWT } from "../utils/validateJwt";


const router = Router()

router.post('/users',createUser)
router.put('/users/delete',[validarJWT],deleteUser)
router.get('/users/listByUser',[validarJWT],listByUser)
router.get('/users/listUsers',[validarJWT],listUsers)
router.post('/users/login',login)

export default router