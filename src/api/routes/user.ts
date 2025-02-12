import express from "express";
import UserController from "../controller/user.js";

const router = express.Router();

router.route('/')
    .get(UserController.getAllUser)
    .post(UserController.createUser);

router.route('/:id')
    .get(UserController.getUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);

export default router;