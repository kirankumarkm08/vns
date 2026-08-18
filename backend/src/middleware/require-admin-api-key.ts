import type { RequestHandler } from "express";
import { env } from "../config/env.js";
import { HttpError } from "../utils/http-error.js";

export const requireAdminApiKey: RequestHandler = (req, _res, next) => {
  const apiKey = req.header("x-admin-api-key");

  if (!apiKey || apiKey !== env.ADMIN_API_KEY) {
    return next(new HttpError("Unauthorized", 401));
  }

  return next();
};
