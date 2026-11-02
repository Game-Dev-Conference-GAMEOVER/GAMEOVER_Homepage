import Link from "next/link";
import { conference } from "@/data/conference";

/**
 * 범용 소개(전면) 페이지의 헤더.
 * 특정 회차가 아니라 컨퍼런스 자체를 가리킨다. 네비게이션은 전면 페이지의
 * 섹션(#about, #editions, #partners)을 향하고, 올해 기록으로 가는 버튼을 둔다.
 */
const NAV = [
  { href: "#about", label: "소개" },
  { href: "#editions", label: "지난 회차" },
  { href: "#partners", label: "함께한 곳" },
];

export function LandingHeader() {
  const site = conference;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="display text-xl text-ink" aria-label={site.name}>
          {site.name}
          <span className="cursor-block" aria-hidden />
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hidden text-muted hover:text-ink sm:block">
              {n.label}
            </Link>
          ))}
          <Link
            href="/2026/"
            className="border border-line px-4 py-2 text-ink hover:border-accent hover:text-accent"
          >
            2026 다시보기
          </Link>
        </nav>
      </div>
    </header>
  );
}
