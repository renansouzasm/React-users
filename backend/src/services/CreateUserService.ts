import prismaClient from "../prisma";

interface CreateUserProps {
  fullName: string;
  email: string;
  status: boolean;
}

export class CreateUserService {
  async handle(object: CreateUserProps) {
    if (!object) {
      throw new Error("Preencha todos os dados.");
    }

    const user = await prismaClient.user.create({
      data: object,
    });

    return user;
  }
}
