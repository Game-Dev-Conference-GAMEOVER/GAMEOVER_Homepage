import Link from "next/link";
import { conference } from "@/data/conference";
import { editions } from "@/data/editions";
import type { Edition } from "@/data/editions";
import { Eyebrow, Section, Title } from "./ui";

/**
 * 지난·다음 회차 목록. 연례 구조의 핵심 섹션으로, 각 회차 기록 페이지로 가는
 * 입구가 된다. editions 데이터를 그대로 돌려 카드를 만들므로, 회차가 늘면
 * editions 배열에 추가하기만 하면 된다.
 */
export function EditionsSection() {
  const nextYear = editions[0].year + 1;

  return (
    <Section id="editions" className="border-t border-line">
      <Eyebrow>Editions</Eyebrow>
      <Title>지난 회차</Title>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {editions.map((e) => (
          <EditionCard key={e.year} edition={e} />
        ))}

        {/* 다음 회차 — 준비 중 */}
        <article className="flex flex-col border border-dashed border-line p-7">
          <div className="flex items-baseline justify-between">
            <p className="display text-4xl text-dim">{nextYear}</p>
            <span className="text-sm text-dim">준비 중</span>
          </div>
          <p className="mt-6 leading-relaxed text-muted">
            다음 회차를 준비하고 있습니다. 일정과 참가 안내는 확정되는 대로 이곳과 동아리 채널로
            전해 드립니다.
          </p>
          <div className="mt-auto pt-6">
            {conference.email && (
              <a href={`mailto:${conference.email}`} className="text-sm text-dim hover:text-accent">
                문의 · {conference.email}
              </a>
            )}
          </div>
        </article>
      </div>
    </Section>
  );
}

function EditionCard({ edition }: { edition: Edition }) {
  const hasSlides = Object.keys(edition.slides).length > 0;

  return (
    <article className="flex flex-col border border-line p-7">
      <div className="flex items-baseline justify-between">
        <p className="display text-4xl text-accent">{edition.year}</p>
        <span className="text-sm text-dim">{edition.no}</span>
      </div>

      <dl className="mt-6 space-y-3 text-sm">
        <div className="flex gap-3">
          <dt className="w-12 shrink-0 text-dim">일시</dt>
          <dd className="font-bold text-ink">{edition.dateLabel}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-12 shrink-0 text-dim">장소</dt>
          <dd className="font-bold text-ink">{edition.venue.name}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-12 shrink-0 text-dim">구성</dt>
          <dd className="text-muted">{edition.summary}</dd>
        </div>
      </dl>

      {hasSlides && <p className="mt-6 text-sm text-accent">발표 자료 공개</p>}

      <div className="mt-6 border-t border-line pt-5">
        <Link
          href={`/${edition.year}/`}
          className="inline-flex items-center gap-1.5 text-base font-bold text-ink hover:text-accent"
        >
          기록 보기
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
