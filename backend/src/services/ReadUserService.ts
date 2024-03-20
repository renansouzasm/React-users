import prismaClient from "../prisma";

export class ReadUserService {
  async handle() {
    const users = await prismaClient.user.findMany();

    return users;
  }
}
