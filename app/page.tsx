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

        <header className="absolute inset-x-0 top-0 z-10 px-6 py-6 sm:px-10">
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.22em] text-white/85 uppercase">
            Parish Community Sale
          </p>
        </header>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-16 pt-40 sm:px-10 sm:pb-20">
          <p className="animate-rise font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight sm:text-7xl md:text-8xl">
            Church Market
          </p>
          <h1 className="animate-rise-delay-1 mt-5 max-w-2xl font-[family-name:var(--font-display)] text-2xl leading-snug font-medium text-white/95 sm:text-4xl">
            성당 가라지 세일에 오세요
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            이웃과 나누는 따뜻한 장터입니다. 생활용품, 책, 소품을 만나보세요.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#details"
              className="inline-flex items-center justify-center rounded-md bg-sun px-5 py-3 text-sm font-semibold text-[#1c2a1f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c65d]"
            >
              일정 보기
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              오시는 길
            </a>
          </div>
        </div>
      </section>

      <section
        id="details"
        className="relative overflow-hidden px-6 py-20 sm:px-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,107,79,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(232,184,74,0.16),transparent_45%)]"
        />
        <div className="relative mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-brand-soft uppercase">
              This Weekend
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl tracking-tight text-brand sm:text-5xl">
              함께하는 주말 장터
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
              성당 주차장과 마당에서 열리는 공동 가라지 세일입니다. 가족, 친구와
              가벼운 마음으로 들러 주세요.
            </p>
          </div>

          <dl className="space-y-5 border-t border-brand/15 pt-6 text-foreground">
            <div>
              <dt className="text-sm tracking-wide text-ink-muted">날짜</dt>
              <dd className="mt-1 font-[family-name:var(--font-display)] text-2xl text-brand">
                2026년 8월 8–9일 (토·일)
              </dd>
            </div>
            <div>
              <dt className="text-sm tracking-wide text-ink-muted">시간</dt>
              <dd className="mt-1 text-lg font-medium">오전 9시 – 오후 3시</dd>
            </div>
            <div>
              <dt className="text-sm tracking-wide text-ink-muted">장소</dt>
              <dd className="mt-1 text-lg font-medium">
                성당 주차장 · 본당 옆 마당
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="visit" className="bg-brand px-6 py-16 text-white sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
              오시는 길
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/80">
              주차는 성당 주차장에 가능합니다. 현장 표지판을 따라 입장해 주세요.
              현금 결제를 권장합니다.
            </p>
          </div>
          <a
            href="mailto:hello@churchmarket.example"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-brand transition duration-300 hover:-translate-y-0.5 hover:bg-[#f7f3ea]"
          >
            문의하기
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-ink-muted sm:px-10">
        <p>Church Market · 성당 가라지 세일</p>
      </footer>
    </div>
  );
}
