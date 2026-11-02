import { conference } from "@/data/conference";

/**
 * 전면 페이지의 바닥글. 특정 회차의 신청을 유도하지 않고, 컨퍼런스 주최와
 * 연락처만 둔다. 회차별 신청 CTA 가 붙은 Footer 와 역할을 가른다.
 */
export function SiteFooter() {
  const site = conference;

  return (
    <footer className="border-t border-line px-6 py-12 md:px-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="display text-lg text-ink">
            {site.name}
            <span className="cursor-block" aria-hidden />
          </p>
          <p className="mt-2 text-sm text-dim">{site.host}</p>
          {site.email && (
            <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-muted hover:text-accent">
              {site.email}
            </a>
          )}
        </div>
        <p className="text-sm text-dim">해마다 한 번 · 부울경 게임 개발 동아리 연합</p>
      </div>
    </footer>
  );
}
