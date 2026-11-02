/**
 * 회차 공통으로 쓰는 타임테이블 타입과 헬퍼.
 *
 * 연례 전환 뒤, 각 회차 데이터(editions/<year>.ts)가 이 타입을 쓴다.
 * 예전에는 content.ts 가 쥐고 있던 것을 회차 데이터와 떼어 여기로 옮겼다.
 */

/** 타임테이블 한 줄. 세션과 쉬는 시간이 같은 목록에 들어 있다. */
export type Entry = {
  start: string;
  end: string;
  /** "공통" | "휴식" | 트랙 이름 */
  kind: string;
  title: string;
  speaker: string;
  affiliation: string;
  room: string;
  /** 비어 있으면 상세 페이지를 만들지 않는다. */
  slug: string;
  summary: string;
  photo: string | null;
};

export type Venue = {
  name: string;
  address: string;
  transit: string[];
  mapUrl: string;
  note: string;
};

export type Faq = { q: string; a: string };

export const COMMON = "공통";
export const BREAK = "휴식";

/** 쉬는 시간이 아닌 줄만. 연사 목록과 세션 상세는 여기서 나온다. */
export function sessionsOf(schedule: Entry[]): Entry[] {
  return schedule.filter((e) => e.kind !== BREAK);
}

/** "09:30" -> 570. 정렬에 쓴다. */
export function minutes(hhmm: string): number {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm);
  return m ? Number(m[1]) * 60 + Number(m[2]) : 0;
}

/**
 * 시작 시각이 같은 줄끼리 묶는다. 지금은 트랙을 나누지 않아 대개 한 줄이지만,
 * 병렬 세션이 생겨도 한 행에 나란히 놓이도록 묶는 구조를 남겨 둔다.
 */
export function groupByStart(entries: Entry[]): { start: string; end: string; items: Entry[] }[] {
  const map = new Map<string, Entry[]>();
  for (const e of entries) {
    const list = map.get(e.start);
    if (list) list.push(e);
    else map.set(e.start, [e]);
  }
  return [...map.entries()]
    .sort((a, b) => minutes(a[0]) - minutes(b[0]))
    .map(([start, items]) => ({ start, end: items[0].end, items }));
}
