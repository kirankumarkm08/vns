export type EnquiryStatus = "new" | "contacted" | "booked" | "lost";

export type CreateEnquiryInput = {
  name: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  guestCount: string;
  packagePreference: string;
  message?: string;
  sourcePage?: string;
  ipAddress?: string;
  userAgent?: string;
};

export type EnquiryRecord = {
  id: number;
  name: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  guestCount: string;
  packagePreference: string;
  message: string | null;
  sourcePage: string | null;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
};
