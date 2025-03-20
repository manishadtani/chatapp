import { Router } from "express";
import { sendMessageController } from "../controllers/message.controller.js";
import secureRoute from '../middleware/secureRoute.js'
const router = Router()

router.post('/send/:id',secureRoute,sendMessageController)

export default router

