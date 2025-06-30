import { Request, Response } from "express";
import { CategoryService } from "../../service/category/categoryService";

export class CategoryController {
  categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }
  create = async (req: Request, res: Response): Promise<any> => {
    const nameCategory = req.body.name;
    const category = await this.categoryService.create(nameCategory);
    return res.status(201).json(category);
  };

  getAll = async (req: Request, res: Response): Promise<any> => {
    const categories = await this.categoryService.getAll();
    return res.json(categories);
  };
}
