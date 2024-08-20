import { Response } from "express";

export const IsProduction = process.env.NODE_ENV === "production";

/**
 * This enum type help us to response correct HTTP Status Code.
 *
 * @type {enum}
 */
export enum ResJsonStatusCode {
  OK = 200,
  CREATED = 201,
  MOVE_PERMANENTLY = 301,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
}

/**
 * This function help us to response in best way,
 * so with this function we can send response correctly.
 * It's better than use res.json() Manualy
 *
 * @function resJson
 * @param {Response} res
 * @param {Object} data
 * @param {String} message
 * @param {ResJsonStatusCode} statusCode
 */
export function resJson(
  res: Response,
  data: object,
  message: string,
  statusCode?: ResJsonStatusCode,
) {
  res.status(!statusCode ? ResJsonStatusCode.OK : statusCode);
  res.json({
    data,
    message,
  });
}
