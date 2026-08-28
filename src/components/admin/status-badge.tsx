import { Badge } from "@/components/ui/badge";
import type { EnquiryStatus } from "@/types/admin";

const styles: Record<EnquiryStatus, string> = {
  new: "border-amber-500/40 bg-amber-100 text-amber-800",
  contacted: "border-sky-500/40 bg-sky-100 text-sky-800",
  booked: "border-emerald-500/40 bg-emerald-100 text-emerald-800",
  lost: "border-rose-500/40 bg-rose-100 text-rose-800",
};

export function StatusBadge({ status }: { status: EnquiryStatus }) {
  const labels: Record<EnquiryStatus, string> = {
    new: "New",
    contacted: "Contacted",
    booked: "Booked",
    lost: "Lost",
  };

  return <Badge className={styles[status]}>{labels[status]}</Badge>;
}
