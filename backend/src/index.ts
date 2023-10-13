import { Elysia, t } from "elysia";
import { postgresPool, redisClient } from "./db";
import { v4 as uuidv4 } from "uuid";

const PORT = 8008;

const app = new Elysia()
  .get("/", () => "Welcome to the CTPChat API")
  .group("/v1", (app) =>
    app.group("/auth", (app) =>
      app
        .post(
          "/signup",
          async ({ body, cookie: { xrt59z } }) => {
            const email_result = await postgresPool.query(
              "SELECT email FROM users WHERE email = $1",
              [body.email]
            );
            if (email_result.rows.length !== 0)
              throw new Error("User already exists, please login");

            const password_hash = await Bun.password.hash(body.password);

            const user_hash = (Math.random() * 10000).toPrecision(4).toString();

            const role = await postgresPool.query(
              "SELECT id FROM roles WHERE role_name = $1",
              ["student"]
            );

            console.log(role);

            const result = await postgresPool.query(
              "INSERT INTO users(email, first_name, last_name, middle_name, password, grad_year, user_hash, role_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING email, first_name, last_name",
              [
                body.email,
                body.first_name,
                body.last_name,
                body.middle_name,
                password_hash,
                body.grad_year,
                user_hash,
                role.rows[0].id,
                new Date(),
              ]
            );

            const uuid = uuidv4();
            redisClient.set(uuid, 1);
            xrt59z.value = uuid;
            xrt59z.httpOnly = true;

            return { message: "success" };
          },
          {
            body: t.Object({
              email: t.String(),
              first_name: t.String(),
              middle_name: t.Optional(t.String()),
              last_name: t.String(),
              grad_year: t.Optional(t.String()),
              password: t.String(),
            }),
          }
        )
        .post(
          "/login",
          async ({ body, cookie: { xrt59z } }) => {
            const password_result = await postgresPool.query(
              "SELECT password FROM users WHERE email = $1",
              [body.email]
            );

            if (password_result.rows.length !== 0)
              throw new Error("User does not exist, please sign up");

            if (
              await Bun.password.verify(body.password, password_result.rows[0])
            )
              throw new Error("Invalid password");

            const uuid = uuidv4();
            redisClient.set(uuid, 1);
            xrt59z.value = uuid;
            xrt59z.httpOnly = true;

            return { message: "success" };
          },
          {
            body: t.Object({
              email: t.String(),
              password: t.String(),
            }),
          }
        )
        .get("/is-logged-in", ({ cookie: { xrt59z } }) => {
          return xrt59z.value ? "YES" : "NO";
        })
    )
  )
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
