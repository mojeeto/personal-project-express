import { Router } from "express";
import { GetFinance } from "../controllers/financeController";

const financeRouter = Router();

// GET::Get all finance data about related user
financeRouter.get("/finance", GetFinance);

// POST::Create new finance record
financeRouter.post("/finance");

// Patch::Update finance record
financeRouter.patch("/finance");

// DELETE::Delete finance record
financeRouter.delete("/finance");

export default financeRouter;
