import { Elysia, t } from "elysia";
import { postgresPool, redisClient } from "./db";
import { v4 as uuidv4 } from "uuid";
import { cors } from "@elysiajs/cors";

const PORT = 8008;

const app = new Elysia()
  .use(cors())
  .get("/", () => "Welcome to the CTPChat API")
  .group("/v1", (app) =>
    app.group("/auth", (app) =>
      app
        .post(
          "/signup",
          async ({ body, set, cookie: { xrt59z } }) => {
            const email_result = await postgresPool.query(
              "SELECT email FROM users WHERE email = $1",
              [body.email]
            );
            if (email_result.rows.length !== 0) {
              set.status = 400;
              return "User already exists, please login";
            }

            const password_hash = await Bun.password.hash(body.password);

            console.log(body.password);

            const user_hash = (Math.random() * 10000).toPrecision(4).toString();
            console.log(user_hash);

            const role = await postgresPool.query(
              "SELECT id FROM roles WHERE role_name = $1",
              ["student"]
            );

            await postgresPool.query(
              "INSERT INTO users(email, first_name, last_name, middle_name, password, user_hash, role_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING email, first_name, last_name",
              [
                body.email,
                body.first_name,
                body.last_name,
                body.middle_name,
                password_hash,
                user_hash,
                role.rows[0].id,
                new Date(),
              ]
            );

            const uuid = uuidv4();
            redisClient.set(uuid, 1);

            return { message: uuid };
          },
          {
            body: t.Object({
              email: t.String(),
              first_name: t.String(),
              middle_name: t.Optional(t.String()),
              last_name: t.String(),
              password: t.String(),
            }),
          }
        )
        .post(
          "/login",
          async ({ body, set }) => {
            const password_result = await postgresPool.query(
              "SELECT password FROM users WHERE email = $1",
              [body.email]
            );

            if (password_result.rows.length === 0) {
              set.status = 400;
              return "User does not exist, please sign up";
            }

            if (
              !(await Bun.password.verify(
                body.password,
                password_result.rows[0].password
              ))
            ) {
              set.status = 400;
              return "Invalid password";
            }

            const uuid = uuidv4();
            redisClient.set(uuid, 1);

            return { message: uuid };
          },
          {
            body: t.Object({
              email: t.String(),
              password: t.String(),
            }),
          }
        )
        .post(
          "/is-logged-in",
          async ({ body }) => {
            return (await redisClient.get(body.uuid)) === null ? "NO" : "YES";
          },
          {
            body: t.Object({
              uuid: t.String(),
            }),
          }
        )
    )
  )
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
