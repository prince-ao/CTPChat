import { Elysia, t } from "elysia";
import auth from "./auth";

const app = new Elysia().group("v1", (app) => app.use(auth));

export default app;
