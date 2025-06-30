import { NextFunction, Request, Response } from "express";
import { ProductService } from "../../service/product/productService";

export class ProductController {
  productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    if (req.file) {
      const { name, price, description, category_id } = req.body;

      const { originalname, filename: banner } = req.file;

      const product = await this.productService.create({
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        banner: banner,
      });
      return res.status(201).json(product);
    }
    throw new Error("error upload file!");
  };

  getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const products = await this.productService.getAll();

    return res.json(products);
  };

  getByCategoryId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { id } = req.params;
    const products = await this.productService.getByCategoryId(id);
    return res.json(products);
  };
}
