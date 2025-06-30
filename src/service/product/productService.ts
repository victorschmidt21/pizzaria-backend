import prismaClient from "../../prisma";

interface CreateProductData {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

export class ProductService {
  create = ({
    name,
    price,
    description,
    banner,
    category_id,
  }: CreateProductData) => {
    const product = prismaClient.product.create({
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

  getAll = () => {
    const products = prismaClient.product.findMany({
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

  getByCategoryId = (category_id: string) => {
    const products = prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
    });
    return products;
  };
}
