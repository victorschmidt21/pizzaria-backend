import { Router } from "express";
import { Middleware } from "../../middleware/middleware";
import { OrderController } from "../../controller/order/orderController";

export const orderRoute = Router();

const orderController = new OrderController();
const middleware = new Middleware();

orderRoute.post("", middleware.isAuth, orderController.createOrder);
orderRoute.delete("/:id", middleware.isAuth, orderController.removeOrder);
orderRoute.put("/finish/:id", middleware.isAuth, orderController.finishOrder);
orderRoute.get(
  "/finished",
  middleware.isAuth,
  orderController.listOrdersFinished
);
orderRoute.get(
  "/detail/:id",
  middleware.isAuth,
  orderController.listItemsByOrder
);

orderRoute.put(
  "/complete/:id",
  middleware.isAuth,
  orderController.completeOrder
);
