import prismaClient from "../../prisma";

export class CategoryService {
  create = (name: string) => {
    if (!name || name === '') {
      throw new Error("Nome da categoria não informado");
    }
    const category = prismaClient.category.create({
      data: {
        name: name,
      },
    });

    return category;
  };
  getAll = () => {
    const categories = prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  };
}
