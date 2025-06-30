import { Router } from "express";
import { Middleware } from "../../middleware/middleware";
import { CategoryController } from "../../controller/category/categoryController";

export const categoryRoute = Router();

const categoryController = new CategoryController();

const middleware = new Middleware();

categoryRoute.post("", middleware.isAuth, categoryController.create);
categoryRoute.get("", middleware.isAuth, categoryController.getAll);
