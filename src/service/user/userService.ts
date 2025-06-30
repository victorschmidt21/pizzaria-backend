import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { compare, hash } from "bcryptjs";
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface LoginUserRequest {
  email: string;
  password: string;
}

class UserService {
  async createUser({ name, email, password }: CreateUserRequest) {
    if (!email) {
      throw new Error("Email não enviado");
    }
    if (!password) {
      throw new Error("Senha não enviada");
    }
    if (!name) {
      throw new Error("Nome do usuário não enviado");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email já cadastrado");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
  async login({ email, password }: LoginUserRequest) {
    if (!email) {
      throw new Error("Usuário/Senha incorretos");
    }
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (!user) {
      throw new Error("Usuário/Senha incorretos");
    }
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Usuário/Senha incorretos");
    }
    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    };
  }

  async getInfo(userId: string) {
    if (!userId) {
      throw new Error("id não informado");
    }
    const user = prismaClient.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
    return user;
  }
}

export { UserService };
