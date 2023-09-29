import { Elysia, t } from "elysia";

const PORT = 8081;

const app = new Elysia()
  .get("/", () => "Welcome to the CTPChat API")
  .group("/v1", (app) =>
    app.group("/auth", (app) => app.post("/signup", (req) => {}))
  )
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
