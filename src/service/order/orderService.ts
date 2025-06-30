import prismaClient from "../../prisma";

interface CreateOrderData {
  table: number;
  name: string;
}

export class OrderService {
  createOrder = ({ table, name }: CreateOrderData) => {
    const order = prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return order;
  };

  removeOrder = (order_id: string) => {
    const orderDeleted = prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
    return orderDeleted;
  };
}
