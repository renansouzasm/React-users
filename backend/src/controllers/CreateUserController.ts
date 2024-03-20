import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { fullName, email, status } = request.body as {
      fullName: string;
      email: string;
      status: boolean;
    };

    const object = {
      fullName,
      email,
      status,
    };

    const userService = new CreateUserService();
    const user = await userService.handle(object);

    reply.send(user);
  }
}
