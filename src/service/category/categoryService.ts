import prismaClient from "../../prisma";

export class CategoryService {
  create = async (name: string) => {
    if (!name || name === '') {
      throw new Error("Nome da categoria não informado");
    }
    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
    });

    return category;
  };
  getAll = async () => {
    const categories = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return categories;
  };
}
