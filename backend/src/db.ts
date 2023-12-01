import { Pool } from "pg";
import { createClient } from "redis";

const postgresPool = new Pool();

const redisClient = await createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

export { postgresPool, redisClient };
