import { Elysia, t } from "elysia";
import auth from "./auth";
import home from "./home";

const app = new Elysia().group("v1", (app) => app.use(auth).use(home));

export default app;
