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
 * @param {Object} responseData that have 3 properties
 * message is response message
 * data is optional for when we want to send data to user
 * statusCode is status of response that related to {ResJsonStatusCode}
 */
export function resJson(
  res: Response,
  responseData: {
    message: string;
    data?: object;
    statusCode?: ResJsonStatusCode;
  },
) {
  const { statusCode, message, data } = responseData;
  res.status(!statusCode ? ResJsonStatusCode.OK : statusCode);
  res.json({
    data,
    message,
  });
}
