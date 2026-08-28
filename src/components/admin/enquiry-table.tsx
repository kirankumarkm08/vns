"use client";

import { Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "./status-badge";
import type { EnquiryRecord, EnquiryStatus } from "@/types/admin";
import { cn } from "@/lib/utils";

const FILTERS: { value: EnquiryStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "booked", label: "Booked" },
  { value: "lost", label: "Lost" },
];

const PAGE_SIZE = 25;

function formatDate(value: string) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function EnquiryTable({
  items,
  total,
  loading,
  search,
  onSearchChange,
  status,
  onStatusChange,
  page,
  onPageChange,
  onOpenEnquiry,
}: {
  items: EnquiryRecord[];
  total: number;
  loading: boolean;
  search: string;
  onSearchChange: (value: string) => void;
  status: EnquiryStatus | undefined;
  onStatusChange: (status: EnquiryStatus | undefined) => void;
  page: number;
  onPageChange: (page: number) => void;
  onOpenEnquiry: (enquiry: EnquiryRecord) => void;
}) {
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search name, phone, event, package..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {FILTERS.map((filter) => {
            const active = filter.value === "all" ? !status : status === filter.value;
            return (
              <Button
                key={filter.value}
                size="sm"
                variant={active ? "gold" : "outline"}
                className="h-8"
                onClick={() => onStatusChange(filter.value === "all" ? undefined : filter.value)}
              >
                {filter.label}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Event</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="hidden lg:table-cell">Package</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Received</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  <Loader2 className="mx-auto h-5 w-5 animate-spin text-muted-foreground" />
                </TableCell>
              </TableRow>
            ) : items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                  No enquiries match your search.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <TableRow
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() => onOpenEnquiry(item)}
                >
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.eventType}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {formatDate(item.preferredDate)}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">{item.packagePreference}</TableCell>
                  <TableCell>
                    <StatusBadge status={item.status} />
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground sm:table-cell">
                    {new Date(item.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>
          {total} enquiry{total === 1 ? "" : "ies"}
        </p>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1 || loading}
            onClick={() => onPageChange(page - 1)}
          >
            Previous
          </Button>
          <span className={cn("px-2 tabular-nums")}>
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= totalPages || loading}
            onClick={() => onPageChange(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
