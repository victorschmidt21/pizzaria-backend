import { Request, Response } from "express";
import { OrderService } from "../../service/order/orderService";

export class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  createOrder = async (req: Request, res: Response): Promise<any> => {
    const { table, name } = req.body;

    const order = await this.orderService.createOrder({ table, name });

    return res.json(order);
  };

  removeOrder = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    const order = await this.orderService.removeOrder(id);

    return res.json(order);
  };
}
