import { Elysia, t } from "elysia";
import { v4 as uuidv4 } from "uuid";
import { postgresPool } from "../../db";
import jwt from "jsonwebtoken";
import cors from "@elysiajs/cors";
import getSchool from "../../../utils/getSchool";

const app = new Elysia().group("/auth", (app) =>
  app
    .use(cors())
    .post(
      "/signup",
      async ({ body, set }) => {
        /*
        -1. make sure that the username is unique
        0. make sure the user is new
        1. get their school
          1a. get their domain
          1b. match their domain with school
        2. hash password
        4. insert everything into the database and get back their database id
        5. create a JWT with the user id
        6. send the JWT
        */
        const username_result = await postgresPool.query(
          "SELECT email, username FROM users WHERE username = $1 OR email = $2",
          [body.username, body.email]
        );

        if (username_result.rows.length !== 0) {
          set.status = 400;
          return username_result.rows[0].email === body.email
            ? "User already exists, please login"
            : "Username already exists";
        }

        const school = getSchool(body.email.split("@")[1]);

        const password_hash = await Bun.password.hash(body.password);

        const result = await postgresPool.query(
          "INSERT INTO users(email, username, password, school, date_of_birth, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
          [
            body.email,
            body.username,
            password_hash,
            school,
            new Date(body.date_of_birth),
            new Date(),
          ]
        );

        const token = jwt.sign(
          result.rows[0].id,
          process.env.JWTPASS as string
        );

        console.log("also workss");

        return { token };
      },
      {
        body: t.Object({
          email: t.String(),
          username: t.String(),
          password: t.String(),
          date_of_birth: t.String(),
        }),
      }
    )
    .post(
      "/login",
      async ({ body, set }) => {
        const password_result = await postgresPool.query(
          "SELECT password, id FROM users WHERE email = $1",
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

        const token = jwt.sign(
          password_result.rows[0].id,
          process.env.JWTPASS as string
        );

        return { token };
      },
      {
        body: t.Object({
          email: t.String(),
          password: t.String(),
        }),
      }
    )
);

export default app;
