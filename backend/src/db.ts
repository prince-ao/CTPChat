import { Pool } from "pg";
import jwt from "jsonwebtoken";

const postgresPool = new Pool();

const onlinePool = new Map<string | jwt.JwtPayload, any>();

const spaceMapping = new Map();

const friendMapping = new Map();

export { postgresPool, onlinePool, spaceMapping, friendMapping };
