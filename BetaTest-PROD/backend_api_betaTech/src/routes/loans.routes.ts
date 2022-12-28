import { Router } from "express";
import { loanListByUser, createLoans, deleteLoan } from '../controllers/loans.controller';
import { validarJWT } from "../utils/validateJwt";


const router = Router()

router.post('/loans',[validarJWT],createLoans)
router.get('/loans/listByUser',[validarJWT],loanListByUser)
router.put('/loans/delete',[validarJWT],deleteLoan)

export default router