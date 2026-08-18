import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { HttpError } from "../utils/http-error.js";
import { sendError } from "../utils/api-response.js";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof ZodError) {
    return sendError(res, "Validation failed", 400, error.flatten().fieldErrors);
  }

  if (error instanceof HttpError) {
    return sendError(res, error.message, error.statusCode, error.details);
  }

  console.error(error);
  return sendError(res, "Internal server error", 500);
};
