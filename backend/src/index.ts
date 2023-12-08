import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import v1 from "./v1";
import { friendMapping, onlinePool, postgresPool, spaceMapping } from "./db";
import jwt from "jsonwebtoken";

const PORT = 8008;

const app = new Elysia()
  .use(cors())
  .get("/", () => "Welcome to the Scholr API")
  .ws("/ws", {
    open(ws) {},
    async close(ws, code, message) {},
    async message(ws, message) {
      const parsed_message = message as {
        token: string;
        type: string;
        room_id: number;
        message: string;
        direct_id: number;
        to_id: number;
      };

      console.log(parsed_message);

      const user = jwt.verify(
        parsed_message.token,
        process.env.JWTPASS as string
      );

      switch (parsed_message.type) {
        case "open":
          onlinePool.set(user, ws);
          break;

        case "close":
          // console.log(parsed_message.message);

          // for (let [user, ws] of onlinePool) {
          //   ws.send(
          //     JSON.stringify({
          //       type: "poolLeave",
          //       user: parsed_message.message,
          //     })
          //   );
          // }

          // onlinePool.delete(String(user));
          break;

        case "send-direct":

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
              "INSERT INTO messages(user_from, message_text, friend_id, updated_at, sent_at) VALUES ($1, $2, $3, $4, $4)",
              [
                user,
                parsed_message.message,
                parsed_message.direct_id,
                new Date(),
              ]
            );

            const { rows } = await postgresPool.query(
              "SELECT username FROM users WHERE id = $1",
              [user]
            );

            const messages = await postgresPool.query(
              "SELECT messages.user_from AS user_from, messages.message_text AS message_text, messages.friend_id AS friend_id, messages.sent_at AS sent_at, users.username AS username FROM messages INNER JOIN users ON users.id = messages.user_from WHERE friend_id = $1 ORDER BY messages.sent_at",
              [parsed_message.direct_id]
            );

            if (friendMapping.has(parsed_message.direct_id)) {
              for (const x of friendMapping.get(parsed_message.direct_id)) {
                (x as typeof ws).send(
                  JSON.stringify({
                    type: "message",
                    message: JSON.stringify([
                      ...messages.rows.reverse(),
                      {
                        message_text: parsed_message.message,
                        user_from: user,
                        friend_id: parsed_message.direct_id,
                        sent_at: String(new Date()),
                        username: rows[0].username,
                      },
                    ]),
                  })
                );
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
          const friendOnline = friendMapping.get(parsed_message.direct_id);
          friendOnline.add(ws);
          break;
      }
    },
  })
  .use(v1)
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
