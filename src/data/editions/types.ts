import type { Entry, Faq, Venue } from "../schedule";

/**
 * 한 회차의 기록. 날짜·장소·타임테이블처럼 그해에 고정된 값과,
 * 그해에만 공개된 발표자료(slug → PDF 경로)를 함께 담는다.
 *
 * 과거 회차는 동결한다 — 값을 코드에 박아 두고 구글 시트가 건드리지 못하게 한다.
 * 다음 회차를 준비할 때는 editions/<year>.ts 를 새로 추가하고 index 에 등록한다.
 */
export type Edition = {
  year: number;
  /** "제1회" 처럼 사람이 읽는 회차 표기. */
  no: string;
  status: "past" | "upcoming";
  dateLabel: string;
  timeLabel: string;
  fee: string;
  venue: Venue;
  /** 지난 회차의 신청 주소. 기록 보존용이며 보통 마감된 폼이다. */
  applyUrl: string;
  applyDeadline: string;
  schedule: Entry[];
  faq: Faq[];
  /** 공개에 동의한 연사의 발표자료. 세션 slug → /slides/<name>.pdf */
  slides: Record<string, string>;
  /** 지난 회차 카드에 한 줄로 쓰는 구성 요약. */
  summary: string;
};
