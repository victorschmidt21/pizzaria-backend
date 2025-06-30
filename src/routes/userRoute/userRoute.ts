import { Router } from "express";
import { UserController } from "../../controller/user/userController";
import { Middleware } from "../../middleware/middleware";

export const userRoute = Router();

const userController = new UserController();

const middleware = new Middleware();

userRoute.post("/user", userController.createUser);
userRoute.post("/login", userController.login);
userRoute.get("/me", middleware.isAuth, userController.getInfo);
