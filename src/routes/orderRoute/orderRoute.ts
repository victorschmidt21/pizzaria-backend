import { Router } from "express";
import { Middleware } from "../../middleware/middleware";
import { OrderController } from "../../controller/order/orderController";

export const orderRoute = Router();

const orderController = new OrderController();
const middleware = new Middleware();

orderRoute.post("", middleware.isAuth, orderController.createOrder);
