import { Router } from "express";

import { createAssets, deleteAsset,listAssets ,listByAsset} from "../controllers/assets.controller";
import { validarJWT } from "../utils/validateJwt";


const router = Router()

router.post('/assets',[validarJWT],createAssets)
router.put('/assets/delete',[validarJWT],deleteAsset)
router.get('/assets/listByAsset',[validarJWT],listByAsset)
router.get('/assets/listAssets',[validarJWT],listAssets)
export default router