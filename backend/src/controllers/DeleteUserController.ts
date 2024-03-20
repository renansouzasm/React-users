import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as {
      id: string;
    };

    const userService = new DeleteUserService();
    const user = await userService.handle({ id });

    reply.send(user);
  }
}
