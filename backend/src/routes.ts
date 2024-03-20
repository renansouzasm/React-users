import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controllers/CreateUserController";
import { ReadUserController } from "./controllers/ReadUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

export async function routes(fastify: FastifyInstance) {
  fastify.post("/user", (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateUserController().handle(request, reply);
  });

  fastify.get("/users", (request: FastifyRequest, reply: FastifyReply) => {
    return new ReadUserController().handle(request, reply);
  });

  fastify.delete("/user", (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteUserController().handle(request, reply);
  });
}
