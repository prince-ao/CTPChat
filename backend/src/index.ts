import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import v1 from "./v1";

const PORT = 8008;

const app = new Elysia()
  .use(cors())
  .get("/", () => "Welcome to the Scholr API")
  .use(v1)
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
