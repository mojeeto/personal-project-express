import { RequestHandler } from "express";
import { findFinanceRecord } from "../repos/financeRepo";
import { resJson, ResJsonStatusCode } from "../utils/helper";
import { FinanceZodObject } from "../models/finance";

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

/**
 * With this request handler function user can create new finance records.
 *
 * @async
 * @function PostFinance
 * @type {RequestHandler}
 * */
export const PostFinance: RequestHandler = async (req, res, next) => {
  // TODO: Use zod validation for check these params of request body.
  try {
    await FinanceZodObject.parseAsync(req.body);
  } catch (err) {
    return resJson(res, {
      message: "Fields is not correct!",
      statusCode: ResJsonStatusCode.BAD_REQUEST,
    });
  }
  const { subject, amount, type, description } = req.body;
  // need userid
  resJson(res, {
    message: `your record with subject{${subject}} amount of ${amount} with type of {${type}} and this description: ${description} was created!.USERID::`,
    data: {
      subject,
      amount,
      type,
      description,
    },
    statusCode: ResJsonStatusCode.CREATED,
  });
};

export const PatchFinance: RequestHandler = (req, res, next) => {};

export const DeleteFinance: RequestHandler = (req, res, next) => {};
