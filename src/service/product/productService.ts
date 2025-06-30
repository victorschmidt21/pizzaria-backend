import prismaClient from "../../prisma";

interface CreateProductData {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export class ProductService {
  create = async ({
    name,
    price,
    description,
    banner,
    category_id,
  }: CreateProductData) => {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      },
    });
    return product;
  };

  getAll = async () => {
    const products = await prismaClient.product.findMany({
      select: {
        name: true,
        price: true,
        description: true,
        category: true,
        banner: true,
      },
    });

    return products;
  };

  getByCategoryId = async (category_id: string) => {
    const products = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });
    return products;
  };
}
