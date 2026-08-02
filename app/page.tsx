import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-full">
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden text-white">
        <div
          aria-hidden
          className="hero-media absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488459716988-2ea21651ce1b?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,38,28,0.25)_0%,rgba(18,38,28,0.45)_45%,rgba(14,28,20,0.88)_100%)]"
        />
        <div
          aria-hidden
          className="sun-glow pointer-events-none absolute -left-16 top-10 -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(232,184,74,0.45)_0%,transparent_70%)] blur-2xl"
        />

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-40 sm:px-10 sm:pb-20">
          <p className="animate-rise font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl">
            Church Market
          </p>
          <h1 className="animate-rise-delay-1 mt-5 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-snug font-medium text-white/95 sm:text-4xl">
            성당 온라인 장터
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            사진을 올려 팔고, Buy로 예약하세요. 물건은 성당에서 전달하고 현금으로
            결제합니다.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/market"
              className="inline-flex items-center justify-center rounded-md bg-sun px-5 py-3 text-sm font-semibold text-[#1c2a1f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c65d]"
            >
              장터 보기
            </Link>
            <Link
              href="/sell"
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              물건 등록
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3">
          {[
            {
              title: "올리기",
              body: "사진, 카테고리, 설명, 가격을 입력해 등록합니다.",
            },
            {
              title: "Buy",
              body: "원하는 물건의 Buy를 누르면 거래가 성립됩니다.",
            },
            {
              title: "성당 픽업",
              body: "판매자는 물건을 맡기고, 구매자는 현금 결제 후 픽업합니다.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-brand">
                {item.title}
              </h2>
              <p className="mt-2 text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-ink-muted sm:px-10">
        <p>Church Market · 성당 온라인 장터</p>
      </footer>
    </div>
  );
}
