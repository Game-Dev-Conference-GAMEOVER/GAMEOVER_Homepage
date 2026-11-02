import Link from "next/link";

/**
 * 지난 회차 기록 페이지임을 알리는 상단 띠.
 * 연례 전환 뒤, /2026/ 같은 아카이브 페이지 맨 위에 둔다.
 */
export function ArchiveBanner() {
  return (
    <div className="border-b border-line bg-surface px-6 py-3 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="display tracking-[0.18em] text-accent uppercase">Archive · 2026</span>
        <span className="text-muted">이 페이지는 2026년 행사의 기록입니다.</span>
        <Link href="/" className="ml-auto text-dim hover:text-accent">
          ← 전체 행사 보기
        </Link>
      </div>
    </div>
  );
}
