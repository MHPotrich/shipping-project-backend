import express from "express";
import LoginController from "../controller/login.js";

const router = express.Router();

router.route('/').post(LoginController.doLogin);

export default router;