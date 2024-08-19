import { RequestHandler } from "express";
import { findFinanceRecord } from "../repos/financeRepo";

/**
 * This function is controller for /finance route app.
 * And with this controller user can gets all finance record.
 *
 * @async
 * @function GetFinance
 * @type {RequestHandler}
 * */
export const GetFinance: RequestHandler = async (req, res, next) => {
  const financeRecords = await findFinanceRecord();
  res.json(financeRecords);
};

export const PostFinance: RequestHandler = (req, res, next) => {};

export const PatchFinance: RequestHandler = (req, res, next) => {};

export const DeleteFinance: RequestHandler = (req, res, next) => {};
