export type EnquiryStatus = "new" | "contacted" | "booked" | "lost";

export type EnquiryRecord = {
  id: number;
  name: string;
  phone: string;
  eventType: string;
  preferredDate: string;
  guestCount: string;
  packagePreference: string;
  message: string | null;
  notes: string | null;
  sourcePage: string | null;
  status: EnquiryStatus;
  createdAt: string;
  updatedAt: string;
};

export type ActivityRecord = {
  id: number;
  enquiryId: number;
  action: string;
  note: string | null;
  createdAt: string;
};

export type EnquiryWithActivity = EnquiryRecord & {
  activities: ActivityRecord[];
};

export type AdminStats = {
  totals: Record<EnquiryStatus, number> & { total: number };
  week: { total: number; newCount: number };
  month: { total: number; newCount: number };
  byEventType: { eventType: string; count: number }[];
  byPackage: { packagePreference: string; count: number }[];
  upcoming: { date: string; count: number }[];
  last30Days: { date: string; count: number }[];
};

export type ListEnquiriesResponse = {
  items: EnquiryRecord[];
  total: number;
};

export const STATUS_LABELS: Record<EnquiryStatus, string> = {
  new: "New",
  contacted: "Contacted",
  booked: "Booked",
  lost: "Lost",
};
