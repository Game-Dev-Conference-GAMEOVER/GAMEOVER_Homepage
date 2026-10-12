import { BREAK, content, groupByStart, minutes } from "@/data/content";
import type { Entry } from "@/data/content";
import { Eyebrow, Lead, Section, Tag, Title } from "./ui";

/**
 * 타임테이블.
 *
 * 트랙을 나누지 않으므로 한 시각에 한 줄만 선다. 시작 시각이 같은 줄을 한 행에
 * 묶는 구조는 그대로 두었다. 나중에 병렬 세션이 생겨도 코드를 고칠 필요가 없다.
 * 주제별 색 구분은 하지 않는다. 강조색은 마젠타 하나뿐이다.
 */
export function ProgramSection() {
  const { schedule, tracks } = content;
  const rows = groupByStart([...schedule].sort((a, b) => minutes(a.start) - minutes(b.start)));

  return (
    <Section id="program" className="border-t border-line">
      <Eyebrow>Program</Eyebrow>
      <Title>타임테이블</Title>
      <Lead>
        트랙을 나누지 않습니다. 한 공간에서 모든 발표를 이어서 듣습니다. 세션은 35분, 쉬는
        시간은 10분입니다. 쉬는 시간마다 세션 퀴즈가 있고, 끝에는 럭키 드로우와 네트워킹이
        이어집니다.
      </Lead>

      <ul className="mt-8 flex flex-wrap gap-2">
        {tracks.map((t) => (
          <li key={t.slug}>
            <span className="border border-line px-3 py-1.5 text-sm text-muted">
              <span className="font-bold text-ink">{t.name}</span>
              <span className="ml-2 text-dim">{t.desc}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 border-t border-line">
        {rows.map((row) => (
          <div
            key={row.start}
            className="grid grid-cols-1 gap-px border-b border-line py-6 md:grid-cols-[7rem_1fr] md:gap-6"
          >
            <div className="display pt-1 text-sm tracking-wider text-muted">
              {row.start}
              <span className="mx-1 text-dim">–</span>
              {row.end}
            </div>

            <div
              className={
                row.items.length > 1
                  ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid gap-4"
              }
            >
              {row.items.map((e, i) => (
                <Slot key={`${e.kind}-${i}`} entry={e} parallel={row.items.length > 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Slot({ entry, parallel }: { entry: Entry; parallel: boolean }) {
  const isBreak = entry.kind === BREAK;

  /* 쉬는 시간은 흐리게 두되, 그 시간에 무엇을 하는지는 한 줄로 덧붙인다. */
  if (isBreak) {
    return (
      <div className="text-sm text-dim">
        <span className="text-muted">{entry.title}</span>
        {entry.summary && <span className="ml-2">· {entry.summary}</span>}
      </div>
    );
  }

  const body = (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Tag strong={parallel}>{entry.kind}</Tag>
        {entry.room && <span className="text-xs text-dim">{entry.room}</span>}
      </div>

      {/*
       * 연사가 정해진 세션은 연사 이름을 제목 자리에 크게 두고, 소속·직함을
       * 그 아래 작은 회색 글씨로 둔다. 연사가 없는 순서(개회식·패널·폐회 등)는
       * 순서 이름을 그대로 제목으로 쓴다.
       */}
      <p className="mt-3 leading-snug font-bold text-ink">
        {entry.speaker || entry.title}
      </p>

      {entry.speaker ? (
        entry.affiliation && <p className="mt-1 text-sm text-muted">{entry.affiliation}</p>
      ) : (
        /*
         * 연사를 기다리는 것은 강연뿐이다. 개회식·네트워킹·폐회처럼 강연이 아닌
         * 순서에까지 "섭외 중"을 붙이면 준비가 덜 된 행사처럼 보인다.
         * 강연인지 아닌지는 주소이름을 붙였는지로 구분한다.
         */
        entry.slug && <p className="mt-1 text-sm text-dim">연사 섭외 중</p>
      )}

      {entry.summary && (
        <p className="mt-3 text-sm leading-relaxed text-muted">{entry.summary}</p>
      )}
    </>
  );

  return <div className="border border-line p-5">{body}</div>;
}
