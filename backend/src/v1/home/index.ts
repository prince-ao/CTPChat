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

        const result1 = await postgresPool.query(
          "SELECT users.username AS username, users.id AS id FROM friends INNER JOIN users ON users.id = friends.user_id2 WHERE friends.user_id1 = $1 AND friends.status = 'Accepted'",
          [user]
        );
        const result2 = await postgresPool.query(
          "SELECT users.username AS username, users.id AS id FROM friends INNER JOIN users ON users.id = friends.user_id1 WHERE friends.user_id2 = $1 AND friends.status = 'Accepted'",
          [user]
        );
        // const result = await postgresPool.query(
        //   "SELECT users.username AS username, users.id AS id FROM friends INNER JOIN users ON (friends.user_id1 = users.id OR friends.user_id2 = users.id) WHERE (friends.user_id1 = $1 OR friends.user_id2 = $1) AND friends.status = $2",
        //   [user, "Accepted"]
        // );

        return [...result1.rows, ...result2.rows].map((query) => {
          return {
            username: query.username,
            id: query.id,
            online: onlinePool.has(String(query.id)),
          };
        });
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
    .post(
      "/add-friend",
      async ({ body, set }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        const { rows } = await postgresPool.query(
          "SELECT id FROM users WHERE username = $1",
          [body.username]
        );

        if (rows.length === 0) {
          set.status = 400;
          return "User not found.";
        }

        await postgresPool.query(
          "INSERT INTO friends(user_id1, user_id2, status, created_at) VALUES ($1, $2, $3, $4)",
          [user, rows[0].id, "Pending", new Date()]
        );

        return "Friend request sent!";
      },
      {
        body: t.Object({
          token: t.String(),
          username: t.String(),
        }),
      }
    )
    .post(
      "/get-friend-requests",
      async ({ body }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        const { rows } = await postgresPool.query(
          "SELECT users.id AS requester_id, users.username AS requester_name, users.school AS requester_school FROM friends INNER JOIN users ON friends.user_id1 = users.id WHERE user_id2 = $1 AND status = 'Pending'",
          [user]
        );

        return rows;
      },
      {
        body: t.Object({
          token: t.String(),
        }),
      }
    )
    .post(
      "/accept-friend-request",
      async ({ body }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        await postgresPool.query(
          "UPDATE friends SET status = 'Accepted' WHERE user_id2 = $1 AND user_id1 = $2",
          [user, body.user_id]
        );

        return "Success";
      },
      {
        body: t.Object({
          token: t.String(),
          user_id: t.Number(),
        }),
      }
    )
    .post(
      "/get-friend-messages",
      async ({ body }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        // get friend_id of the two friends
        const { rows } = await postgresPool.query(
          "SELECT id FROM friends WHERE (user_id1 = $1 AND user_id2 = $2) OR (user_id1 = $2 AND user_id2 = $1)",
          [user, body.user_id]
        );

        // get messages
        const messages = await postgresPool.query(
          "SELECT messages.user_from AS user_from, messages.message_text AS message_text, messages.friend_id AS friend_id, messages.sent_at AS sent_at, users.username AS username FROM messages INNER JOIN users ON users.id = messages.user_from WHERE friend_id = $1 ORDER BY messages.sent_at",
          [rows[0].id]
        );

        return { friend_id: rows[0].id, messages: messages.rows };
      },
      {
        body: t.Object({
          token: t.String(),
          user_id: t.Number(),
        }),
      }
    )
    .post(
      "/send-friend-message",
      async ({ body }) => {
        const user = jwt.verify(body.token, process.env.JWTPASS as string);

        await postgresPool.query(
          "INSERT INTO messages(user_from, message_text, friend_id, updated_at, sent_at) VALUES ($1, $2, $3, $4, $4)",
          [user, body.message, body.friend_id, new Date()]
        );

        return "Success";
      },
      {
        body: t.Object({
          token: t.String(),
          message: t.String(),
          friend_id: t.Number(),
        }),
      }
    )
);

export default app;
