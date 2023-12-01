import { Pool } from "pg";

const postgresPool = new Pool();

const onlinePool = new Set();

const spaceMapping = new Map();

const friendMapping = new Map();

export { postgresPool, onlinePool, spaceMapping, friendMapping };
