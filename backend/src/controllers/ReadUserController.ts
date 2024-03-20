import { FastifyRequest, FastifyReply } from "fastify";
import { ReadUserService } from "../services/ReadUserService";

export class ReadUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const userService = new ReadUserService();
    const users = await userService.handle();

    reply.send(users);
  }
}
