import prismaClient from "../../prisma";

interface CreateOrderData {
  table: number;
  name: string;
}

export class OrderService {
  createOrder = async ({ table, name }: CreateOrderData) => {
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return order;
  };

  removeOrder = async (order_id: string) => {
    const orderDeleted = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
    return orderDeleted;
  };
}
