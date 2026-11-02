import { conference } from "@/data/conference";
import type { Edition } from "@/data/editions";
import { Button } from "./ui";
import { TypedSlogan } from "./TypedSlogan";

/**
 * 한 회차의 첫 화면(아카이브 상단). 날짜·장소·참가비는 회차(edition)에서,
 * 이름·슬로건·소개는 컨퍼런스(conference)에서 가져온다.
 */
export function Hero({ edition }: { edition: Edition }) {
  return (
    <section className="relative overflow-hidden border-b border-line px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <div className="mx-auto w-full max-w-5xl">
        <p className="display text-sm tracking-[0.18em] text-accent uppercase">
          {edition.dateLabel} · {edition.timeLabel}
        </p>

        <TypedSlogan
          text={conference.slogan}
          className="mt-6 text-4xl leading-[1.15] font-extrabold text-ink md:text-6xl"
        />

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {conference.lead}
        </p>

        <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
          {[
            ["일시", `${edition.dateLabel}\n${edition.timeLabel}`],
            ["장소", edition.venue.name],
            ["참가비", edition.fee],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs tracking-wider text-dim">{k}</dt>
              <dd className="mt-1 leading-snug font-bold whitespace-pre-line text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        {/* 아카이브(지난 회차) 맥락. 신청이 아니라 발표자료·타임테이블로 안내한다. */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="#program" variant="outline">
            발표자료 · 타임테이블 보기
          </Button>
        </div>

        <p className="mt-4 text-sm text-dim">
          {edition.year}년 행사는 종료되었습니다. 공개에 동의한 연사의 발표자료를 공개합니다.
        </p>
      </div>

      {/* 거대한 워드마크. 화면 밖으로 잘려 나가는 배경 요소라 읽히지 않아도 된다. */}
      <div
        aria-hidden
        className="display pointer-events-none absolute -right-6 -bottom-10 hidden text-[10rem] leading-none text-surface select-none md:block"
      >
        {conference.name}
      </div>
    </section>
  );
}
