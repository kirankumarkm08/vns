"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Loader2, MapPin, MessageSquare, Phone, Save, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StatusBadge } from "./status-badge";
import { adminFetch } from "@/lib/admin-api";
import type { EnquiryStatus, EnquiryWithActivity } from "@/types/admin";
import { STATUS_LABELS } from "@/types/admin";

const STATUS_ORDER: EnquiryStatus[] = ["new", "contacted", "booked", "lost"];

function formatDateTime(value: string) {
  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function EnquiryDetailDialog({
  enquiry,
  onClose,
  onUpdated,
}: {
  enquiry: EnquiryWithActivity | null;
  onClose: () => void;
  onUpdated: (updated: EnquiryWithActivity) => void;
}) {
  const [notes, setNotes] = useState(enquiry?.notes ?? "");
  const [savingNotes, setSavingNotes] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState<EnquiryStatus | null>(null);

  const saveNotes = async () => {
    if (!enquiry) return;
    setSavingNotes(true);
    try {
      const updated = await adminFetch<EnquiryWithActivity>(`/enquiries/${enquiry.id}/notes`, {
        method: "PATCH",
        body: JSON.stringify({ notes }),
      });
      toast.success("Notes saved");
      onUpdated(updated);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not save notes");
    } finally {
      setSavingNotes(false);
    }
  };

  const changeStatus = async (status: EnquiryStatus) => {
    if (!enquiry) return;
    setUpdatingStatus(status);
    try {
      const updated = await adminFetch<EnquiryWithActivity>(`/enquiries/${enquiry.id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      });
      toast.success(`Marked as ${STATUS_LABELS[status]}`);
      onUpdated(updated);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not update status");
    } finally {
      setUpdatingStatus(null);
    }
  };

  if (!enquiry) return null;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 pr-8">
            <span>{enquiry.name}</span>
            <StatusBadge status={enquiry.status} />
          </DialogTitle>
          <DialogDescription>
            Enquiry #{enquiry.id} · received {formatDateTime(enquiry.createdAt)}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a className="text-foreground hover:underline" href={`tel:${enquiry.phone}`}>
              {enquiry.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            Preferred date: <span className="font-medium">{formatDate(enquiry.preferredDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            Guests: <span className="font-medium">{enquiry.guestCount}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            Event: <span className="font-medium">{enquiry.eventType}</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Package:</span>{" "}
            <span className="font-medium">{enquiry.packagePreference}</span>
          </div>
          {enquiry.sourcePage ? (
            <div className="text-sm">
              <span className="text-muted-foreground">Source:</span>{" "}
              <span className="font-medium">{enquiry.sourcePage}</span>
            </div>
          ) : null}
        </div>

        {enquiry.message ? (
          <div className="rounded-md border bg-muted/40 p-3 text-sm">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <MessageSquare className="h-3.5 w-3.5" /> Their message
            </p>
            <p className="mt-1.5 whitespace-pre-wrap leading-relaxed">{enquiry.message}</p>
          </div>
        ) : null}

        <div className="space-y-2">
          <Label htmlFor={`notes-${enquiry.id}`}>Internal notes</Label>
          <Textarea
            id={`notes-${enquiry.id}`}
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Call notes, follow-up reminders, booking details..."
          />
          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={saveNotes} disabled={savingNotes}>
              {savingNotes ? <Loader2 className="animate-spin" /> : <Save />}
              Save notes
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Update status</Label>
          <div className="flex flex-wrap gap-2">
            {STATUS_ORDER.map((status) => (
              <Button
                key={status}
                size="sm"
                variant={enquiry.status === status ? "gold" : "outline"}
                disabled={updatingStatus !== null}
                onClick={() => changeStatus(status)}
              >
                {updatingStatus === status ? <Loader2 className="animate-spin" /> : null}
                {STATUS_LABELS[status]}
              </Button>
            ))}
          </div>
        </div>

        {enquiry.activities.length > 0 ? (
          <div className="space-y-2">
            <Label>Activity</Label>
            <ol className="space-y-3 border-l border-border pl-4">
              {enquiry.activities.map((activity) => (
                <li key={activity.id} className="relative">
                  <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-gold" />
                  <p className="text-sm text-foreground">
                    {activity.action === "status_changed"
                      ? activity.note
                      : (activity.note ?? activity.action)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatDateTime(activity.createdAt)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
