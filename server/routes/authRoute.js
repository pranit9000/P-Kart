import express from "express";
import { signupController } from "../controller/signup.js";
import { LoginController } from "../controller/login.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", LoginController);

export default router;
