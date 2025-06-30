import { number } from "zod";
import prismaClient from "../../prisma";

interface CreateItemData {
  amount: number;
  order_id: string;
  product_id: string;
}

export class ItemService {
  createItem = async ({ amount, order_id, product_id }: CreateItemData) => {
    const item = await prismaClient.item.create({
      data: {
        amount: amount,
        order_id: order_id,
        product_id: product_id,
      },
    });
    return item;
  };
}
