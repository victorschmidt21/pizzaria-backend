import { Router } from "express";
import { Middleware } from "../../middleware/middleware";
import { ItemController } from "../../controller/item/itemController";

export const itemRouter = Router();

const middleware = new Middleware();
const itemController = new ItemController();

itemRouter.post("", middleware.isAuth, itemController.createItem);
itemRouter.delete("/:id", middleware.isAuth, itemController.removeItem);
