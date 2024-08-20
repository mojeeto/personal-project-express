import { RequestHandler } from "express";
import { FinanceZodObject } from "../models/finance";
import { resJson, ResJsonStatusCode, ZodErrorHandler } from "../utils/helper";
import { ZodError } from "zod";

export const FiananceVM: RequestHandler = async (req, res, next) => {
  try {
    await FinanceZodObject.parseAsync(req.body);
    return next();
  } catch (err) {
    if (err instanceof ZodError) {
      const validationErrorData = ZodErrorHandler(err);
      return resJson(res, validationErrorData);
    }
    return resJson(res, {
      message: "Something bad went wronge! Please contact with admin.",
      statusCode: ResJsonStatusCode.BAD_REQUEST,
    });
  }
};
