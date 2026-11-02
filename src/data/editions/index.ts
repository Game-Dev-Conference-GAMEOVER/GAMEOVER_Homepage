import { edition2026 } from "./2026";
import type { Edition } from "./types";

export type { Edition } from "./types";

/**
 * 모든 회차. 최신이 앞에 오도록 내림차순으로 둔다.
 * 다음 회차를 추가할 때는 editions/<year>.ts 를 만들고 여기 배열 맨 앞에 넣는다.
 */
export const editions: Edition[] = [edition2026];

/** 가장 최근 회차. 전면 페이지의 대표 입구로 쓴다. */
export const latestEdition: Edition = editions[0];

/** 연도로 회차 하나를 찾는다. 라우트(/2026/)에서 쓴다. */
export function getEdition(year: number): Edition | undefined {
  return editions.find((e) => e.year === year);
}
