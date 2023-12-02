import { Elysia, t } from "elysia";
import { v4 as uuidv4 } from "uuid";
import {
  friendMapping,
  onlinePool,
  postgresPool,
  spaceMapping,
} from "../../db";
import jwt from "jsonwebtoken";

const app = new Elysia().group("/home", (app) =>
  app
    .ws("/", {
      message(ws, message) {
        const parsed_message = JSON.parse(message as string);
        const user = jwt.verify(
          parsed_message.token,
          process.env.JWTPASS as string
        );
        switch (parsed_message.type) {
          case "open":
            onlinePool.add(user);
            break;

          case "send":
            if (parsed_message.room_id) {
              postgresPool.query(
                "INSERT INTO messages(user_from, message_text, room_id, updated_at, sent_at) VALUES ($1, $2, $3, $4, $5)",
                [
                  user,
                  parsed_message.message,
                  parsed_message.room_id,
                  new Date(),
                  new Date(),
                ]
              );

              if (spaceMapping.has(parsed_message.room_id)) {
                for (const x of spaceMapping.get(parsed_message.room_id)) {
                  (x as typeof ws).send(parsed_message.message);
                }
              }
            } else {
              postgresPool.query(
                "INSERT INTO messages(user_from, message_text, friend_id, updated_at, sent_at) VALUES ($1, $2, $3, $4, $5)",
                [
                  user,
                  parsed_message.message,
                  parsed_message.direct_id,
                  new Date(),
                  new Date(),
                ]
              );

              if (friendMapping.has(parsed_message.direct_id)) {
                for (const x of friendMapping.get(parsed_message.direct_id)) {
                  (x as typeof ws).send(parsed_message.message);
                }
              }
            }
            break;

          case "join":
            if (!spaceMapping.has(parsed_message.room_id)) {
              spaceMapping.set(parsed_message.room_id, new Set());
            }
            const spaceOnline = spaceMapping.get(parsed_message.room_id);
            spaceOnline.add(ws);
            break;

          case "join-direct":
            if (!friendMapping.has(parsed_message.direct_id)) {
              friendMapping.set(parsed_message.direct_id, new Set());
            }
            const friendOnline = friendMapping.get(parsed_message.room_id);
            friendOnline.add(ws);
            break;
        }
      },
    })
    .post(
      "/get-spaces",
      async ({ body }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        const result = await postgresPool.query(
          "SELECT space_memberships.space_id AS space_id, spaces.space_name AS space_name FROM space_memberships INNER JOIN spaces ON space_memberships.space_id = spaces.id WHERE space_memberships.user_id = $1",
          [user]
        );

        return result.rows;
      },
      {
        body: t.Object({
          token: t.String(),
        }),
      }
    )
    .post(
      "/get-friends",
      async ({ body }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        const result = await postgresPool.query(
          "SELECT users.username AS username, users.id AS id FROM friends  INNER JOIN users ON friends.user_id1 = users.id WHERE friends.user_id1 = $1 AND friends.status = $2  UNION  SELECT *  FROM friends  INNER JOIN users ON friends.user_id2 = users.id WHERE friends.user_id2 = $1 AND friends.status = $2;",
          [user, "Accepted"]
        );

        return result.rows;
      },
      {
        body: t.Object({
          token: t.String(),
        }),
      }
    )
    .post(
      "/get-user-info",
      async ({ body }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        const result = await postgresPool.query(
          "SELECT email, school, username, date_of_birth FROM users WHERE id = $1",
          [user]
        );

        return result.rows;
      },
      {
        body: t.Object({
          token: t.String(),
        }),
      }
    )
);

export default app;
