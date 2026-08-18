import { Router } from "express";
import { createEnquiryHandler, listEnquiriesHandler } from "../controllers/enquiry.controller.js";
import { requireAdminApiKey } from "../middleware/require-admin-api-key.js";

export const enquiryRouter = Router();

enquiryRouter.post("/", createEnquiryHandler);
enquiryRouter.get("/", requireAdminApiKey, listEnquiriesHandler);
