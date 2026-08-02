import Link from "next/link";
import { AdminOrderActions } from "@/components/admin-order-actions";
import { createClient } from "@/lib/supabase/server";
import type { AdminStats, StatsRange } from "@/lib/types";
import { formatPrice, orderStatusLabel } from "@/lib/utils";

export const dynamic = "force-dynamic";

const ranges: { id: StatsRange; label: string }[] = [
  { id: "day", label: "매일" },
  { id: "week", label: "매주" },
  { id: "month", label: "매월" },
  { id: "year", label: "매년" },
  { id: "all", label: "전체" },
];

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const { range: rawRange } = await searchParams;
  const range = (ranges.some((r) => r.id === rawRange)
    ? rawRange
    : "all") as StatsRange;

  const supabase = await createClient();
  const { data: stats } = await supabase.rpc("admin_stats", {
    p_range: range,
  });

  const { data: orders } = await supabase
    .from("orders")
    .select("*, listings(title), buyer:profiles!orders_buyer_id_fkey(email, full_name), seller:profiles!orders_seller_id_fkey(email, full_name)")
    .in("status", ["awaiting_dropoff", "ready_for_pickup", "completed"])
    .order("created_at", { ascending: false })
    .limit(50);

  const s = (stats || {}) as AdminStats;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-brand">
        관리자
      </h1>
      <p className="mt-2 text-ink-muted">
        드롭오프·픽업 처리와 기간별 통계를 확인합니다.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {ranges.map((r) => (
          <Link
            key={r.id}
            href={`/admin?range=${r.id}`}
            className={`rounded-md px-3 py-1.5 text-sm ${
              range === r.id
                ? "bg-brand text-white"
                : "bg-white/70 text-foreground hover:bg-white"
            }`}
          >
            {r.label}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "신규 등록", value: s.new_listings ?? 0 },
          { label: "예약", value: s.reserved ?? 0 },
          { label: "성당 보관", value: s.at_church ?? 0 },
          { label: "판매완료", value: s.sold ?? 0 },
          { label: "GMV", value: formatPrice(s.gmv_cents ?? 0) },
          { label: "활성 유저", value: s.active_users ?? 0 },
          {
            label: "드롭오프 대기",
            value: s.orders_awaiting_dropoff ?? 0,
          },
          {
            label: "픽업 대기",
            value: s.orders_ready_for_pickup ?? 0,
          },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-brand/10 bg-white/70 p-4"
          >
            <p className="text-sm text-ink-muted">{card.label}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-3xl text-brand">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-[family-name:var(--font-display)] text-2xl text-brand">
          주문 파이프라인
        </h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-brand/10 bg-white/70">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-brand/10 text-ink-muted">
              <tr>
                <th className="px-4 py-3 font-medium">물건</th>
                <th className="px-4 py-3 font-medium">구매자</th>
                <th className="px-4 py-3 font-medium">판매자</th>
                <th className="px-4 py-3 font-medium">금액</th>
                <th className="px-4 py-3 font-medium">상태</th>
                <th className="px-4 py-3 font-medium">액션</th>
              </tr>
            </thead>
            <tbody>
              {(orders || []).map((order) => {
                const listing = Array.isArray(order.listings)
                  ? order.listings[0]
                  : order.listings;
                const buyer = Array.isArray(order.buyer)
                  ? order.buyer[0]
                  : order.buyer;
                const seller = Array.isArray(order.seller)
                  ? order.seller[0]
                  : order.seller;
                return (
                  <tr key={order.id} className="border-t border-brand/5">
                    <td className="px-4 py-3">{listing?.title || "—"}</td>
                    <td className="px-4 py-3">
                      {buyer?.full_name || buyer?.email || "—"}
                    </td>
                    <td className="px-4 py-3">
                      {seller?.full_name || seller?.email || "—"}
                    </td>
                    <td className="px-4 py-3">
                      {formatPrice(order.price_cents)}
                    </td>
                    <td className="px-4 py-3">
                      {orderStatusLabel(order.status)}
                    </td>
                    <td className="px-4 py-3">
                      <AdminOrderActions
                        orderId={order.id}
                        status={order.status}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!orders?.length ? (
            <p className="px-4 py-6 text-sm text-ink-muted">주문이 없습니다.</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
