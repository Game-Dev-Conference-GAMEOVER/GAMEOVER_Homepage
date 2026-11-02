import Link from "next/link";
import { conference } from "@/data/conference";

/*
 * 아카이브(/2026/) 안에서 쓰는 헤더라 앵커는 현재 페이지 기준 상대 링크로 둔다.
 * "/#program" 처럼 적으면 전면 페이지로 튕겨 나간다.
 */
const NAV = [
  { href: "#about", label: "소개" },
  { href: "#program", label: "프로그램" },
  { href: "#venue", label: "오시는 길" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="display text-xl text-ink" aria-label={conference.name}>
          {conference.name}
          <span className="cursor-block" aria-hidden />
        </Link>

        <nav className="flex items-center gap-5 text-sm">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hidden text-muted hover:text-ink sm:block">
              {n.label}
            </Link>
          ))}
          {/* 전면(범용 소개) 페이지로 돌아가는 입구 */}
          <Link
            href="/"
            className="border border-line px-4 py-2 text-dim hover:border-accent hover:text-accent"
          >
            ← 홈
          </Link>
        </nav>
      </div>
    </header>
  );
}
