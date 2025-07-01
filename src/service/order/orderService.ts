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

  finishOrder = async (order_id: string) => {
    const orderCompleted = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
    });

    return orderCompleted;
  };

  listOrdersFinished = async () => {
    const orders = await prismaClient.order.findMany({
      where: {
        status: false,
        draft: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return orders;
  };

  listItemsByOrder = async (order_id: string) => {
    const items = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
      },
    });
    return items;
  };

  completeOrder = async (order_id: string) => {
    const orderCompleted = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });
    return orderCompleted;
  };
}
