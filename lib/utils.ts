export function formatPrice(cents: number) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function listingImageUrl(path: string | null | undefined) {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return null;
  return `${base}/storage/v1/object/public/listing-images/${path}`;
}

export function listingStatusLabel(status: string) {
  switch (status) {
    case "available":
      return "판매중";
    case "reserved":
      return "예약됨";
    case "at_church":
      return "성당 보관중";
    case "sold":
      return "판매완료";
    case "cancelled":
      return "취소";
    default:
      return status;
  }
}

export function orderStatusLabel(status: string) {
  switch (status) {
    case "reserved":
    case "awaiting_dropoff":
      return "드롭오프 대기";
    case "ready_for_pickup":
      return "픽업 대기";
    case "completed":
      return "거래 완료";
    case "cancelled":
      return "취소";
    default:
      return status;
  }
}
