import prismaClient from "../../prisma";

interface CreateOrderData {
  table: number;
  name: string;
}

export class OrderService {

  createOrder = ({ table, name }: CreateOrderData)  => {
    const order = prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });
    return order;
  };
}
