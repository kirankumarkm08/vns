import type { RequestHandler } from "express";
import { sendError } from "../utils/api-response.js";

export const notFoundHandler: RequestHandler = (req, res) => {
  return sendError(res, `Route ${req.method} ${req.path} not found`, 404);
};
