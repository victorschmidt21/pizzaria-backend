import { Request, Response } from "express";
import { ItemService } from "../../service/item/itemService";

export class ItemController {
  itemService: ItemService;
  constructor() {
    this.itemService = new ItemService();
  }

  createItem = async (req: Request, res: Response): Promise<any> => {
    const { amount, order_id, product_id } = req.body;

    const item = await this.itemService.createItem({
      amount,
      order_id,
      product_id,
    });

    res.json(item);
  };

  removeItem = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    const item = await this.itemService.removeItem(id);

    return res.json(item);
  };
}
