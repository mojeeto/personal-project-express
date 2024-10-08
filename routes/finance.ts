import { Router } from "express";
import { GetFinance, PostFinance } from "../controllers/financeController";
import { FiananceVM } from "../middlewares/ValidationMiddleware";

const financeRouter = Router();

// GET::Get all finance data about related user
financeRouter.get("/finance", GetFinance);

// POST::Create new finance record
financeRouter.post("/finance", FiananceVM, PostFinance);

// Patch::Update finance record
financeRouter.patch("/finance");

// DELETE::Delete finance record
financeRouter.delete("/finance");

export default financeRouter;
