import type { Request } from "express";
import {
  createEnquiry,
  findEnquiryById,
  listEnquiries,
} from "../repositories/enquiry.repository.js";
import type { CreateEnquiryInput, EnquiryStatus } from "../types/enquiry.js";
import { HttpError } from "../utils/http-error.js";

function getClientIp(req: Request) {
  const forwardedFor = req.header("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return req.ip;
}

export async function submitEnquiry(
  input: Omit<CreateEnquiryInput, "ipAddress" | "userAgent">,
  req: Request,
) {
  const id = await createEnquiry({
    ...input,
    ipAddress: getClientIp(req),
    userAgent: req.header("user-agent")?.slice(0, 500),
  });

  const enquiry = await findEnquiryById(id);
  if (!enquiry) {
    throw new HttpError("Enquiry was created but could not be loaded", 500);
  }

  return enquiry;
}

export async function getEnquiries(filters: {
  status?: EnquiryStatus;
  limit: number;
  offset: number;
}) {
  return listEnquiries(filters);
}
