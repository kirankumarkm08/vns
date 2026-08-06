import { redirect } from "next/navigation";

export default async function CheckAvailabilityRedirect({
  searchParams,
}: {
  searchParams: Promise<{ pkg?: string }>;
}) {
  const { pkg } = await searchParams;
  redirect(pkg ? `/booking?pkg=${encodeURIComponent(pkg)}` : "/booking");
}
