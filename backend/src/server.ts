import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";
import * as dotenv from "dotenv";

dotenv.config();

const portString: string | undefined = process.env.PORT;
const port: number = portString ? parseInt(portString) : 443;

const hostName: string = process.env.HOST ? process.env.HOST : "localhost";
const corsOrigin: string = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN
  : "localhost";

const app: FastifyInstance = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

const start = async () => {
  app.register(cors, {
    origin: corsOrigin,
    methods: ["GET", "POST", "DELETE"],
  });
  app.register(routes);

  try {
    await app.listen({
      port: port,
      host: hostName,
    });
  } catch (error) {
    process.exit(1);
  }
};

start();
