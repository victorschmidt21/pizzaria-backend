import { Router } from "express";
import { ProductController } from "../../controller/product/productController";
import { Middleware } from "../../middleware/middleware";
import multer from "multer";
import uploadConfig from "../../config/multer";
export const productRoute = Router();

const productController = new ProductController();
const middleware = new Middleware();
const uploadMiddleware = multer(uploadConfig.upload("./tmp"));

productRoute.post(
  "",
  middleware.isAuth,
  uploadMiddleware.single("banner"),
  productController.create
);
productRoute.get("", middleware.isAuth, productController.getAll);

productRoute.get("/:id", middleware.isAuth, productController.getByCategoryId);
