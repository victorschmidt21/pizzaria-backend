import { Router } from "express";
import { userRoute } from "./userRoute/userRoute";
import { categoryRoute } from "./categoryRoute/categoryRoute";
import { productRoute } from "./productRoute/productRoute";
import { orderRoute } from "./orderRoute/orderRoute";
import { itemRouter } from "./itemRoute/itemRoute";

export const allRoutes = Router();

allRoutes.use("/user", userRoute);
allRoutes.use("/category", categoryRoute);
allRoutes.use("/product", productRoute);
allRoutes.use("/order", orderRoute);
allRoutes.use("/item", itemRouter);
