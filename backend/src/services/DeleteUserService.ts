import prismaClient from "../prisma";

interface DeleteUserProps {
  id: string;
}

export class DeleteUserService {
  async handle({ id }: DeleteUserProps) {
    if (!id) {
      throw new Error("Solicitação inválida.");
    }

    const findUser = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!findUser) {
      throw new Error("Usuário não encontrado.");
    }

    await prismaClient.user.delete({
      where: {
        id: findUser.id,
      },
    });

    return { message: "Usuário deletado com sucesso." };
  }
}
