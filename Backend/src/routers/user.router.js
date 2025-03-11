import { Router } from "express";
const router = Router()
import {createController, loginController, logoutController} from "../controllers/user.controller.js";

router.post("/createUser", createController)
router.post("/loginUser", loginController)
router.post("/logout", logoutController)


export default router

