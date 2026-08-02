import Link from "next/link";
import { getCurrentProfile } from "@/lib/auth";
import { signOutAction } from "@/lib/actions/auth";

export async function SiteHeader() {
  const profile = await getCurrentProfile();

  return (
    <header className="sticky top-0 z-40 border-b border-brand/10 bg-[color-mix(in_oklab,var(--background)_88%,white)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl tracking-tight text-brand"
        >
          Church Market
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-foreground">
          <Link href="/market" className="hover:text-brand">
            장터
          </Link>
          <Link href="/sell" className="hover:text-brand">
            판매등록
          </Link>
          {profile ? (
            <>
              <Link href="/me" className="hover:text-brand">
                내 거래
              </Link>
              {profile.role === "admin" ? (
                <Link href="/admin" className="hover:text-brand">
                  관리자
                </Link>
              ) : null}
              <form action={signOutAction}>
                <button type="submit" className="text-ink-muted hover:text-brand">
                  로그아웃
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-brand px-3 py-1.5 text-white hover:bg-brand-soft"
            >
              로그인
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
