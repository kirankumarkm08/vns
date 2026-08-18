import { z } from "zod";

const todayAtMidnight = () => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

export const createEnquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[+()\d\s-]+$/),
  eventType: z.string().trim().min(1).max(80),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .refine((value) => {
      const date = new Date(`${value}T00:00:00`);
      return !Number.isNaN(date.getTime()) && date >= todayAtMidnight();
    }, "Preferred date cannot be in the past"),
  guestCount: z
    .string()
    .trim()
    .min(1)
    .max(30)
    .regex(/^[\d\s,+-]+$/),
  packagePreference: z.string().trim().min(1).max(50),
  message: z.string().trim().max(1000).optional().default(""),
  sourcePage: z.string().trim().max(255).optional(),
});

export const listEnquiriesQuerySchema = z.object({
  status: z.enum(["new", "contacted", "booked", "lost"]).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});
