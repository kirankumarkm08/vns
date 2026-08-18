import type { RequestHandler } from "express";
import { createEnquirySchema, listEnquiriesQuerySchema } from "../schemas/enquiry.schema.js";
import { getEnquiries, submitEnquiry } from "../services/enquiry.service.js";
import { sendSuccess } from "../utils/api-response.js";

export const createEnquiryHandler: RequestHandler = async (req, res, next) => {
  try {
    const input = createEnquirySchema.parse(req.body);
    const enquiry = await submitEnquiry(input, req);
    return sendSuccess(res, enquiry, 201);
  } catch (error) {
    return next(error);
  }
};

export const listEnquiriesHandler: RequestHandler = async (req, res, next) => {
  try {
    const query = listEnquiriesQuerySchema.parse(req.query);
    const enquiries = await getEnquiries(query);
    return sendSuccess(res, enquiries);
  } catch (error) {
    return next(error);
  }
};
