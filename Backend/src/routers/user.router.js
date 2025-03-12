import { Router } from "express";
const router = Router()
import {alluserController, createController, loginController, logoutController} from "../controllers/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

router.post("/createUser", createController)
router.post("/loginUser", loginController)
router.post("/logout", logoutController)
router.get("/alluser", secureRoute , alluserController)


export default router

