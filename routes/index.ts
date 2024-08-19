import { Router } from "express";
import financeRouter from "./finance";

const mainRouter = Router();

mainRouter.use(financeRouter);

export default mainRouter;
