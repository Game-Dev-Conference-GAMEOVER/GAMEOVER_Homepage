/**
 * 컨퍼런스 자체(회차와 무관한 상시 정보).
 *
 * 이름·슬로건·성격(실패의 재발 방지)·발표 구조처럼 해가 바뀌어도 그대로인 값만 둔다.
 * 날짜·장소·타임테이블 같은 회차 정보는 editions/<year>.ts 로 갈랐다.
 *
 * 값은 content.json 에서 끌어온다. 빌드 때 구글 시트가 content.json 을 덮어쓰므로,
 * 상시 정보(이름·슬로건·소개·발표 구조)는 시트에서 계속 고칠 수 있다.
 * 반면 지난 회차 기록은 editions/ 에 동결해 시트 변경의 영향을 받지 않는다.
 */
import raw from "./content.json";

export type About = {
  title: string;
  lead: string;
  body: string[];
  excluded: string[];
  structureTitle: string;
  structureNote: string;
};

/** 모든 강연이 지나는 칸. 시작과 끝만 정하고 사이는 연사에게 맡긴다. */
export type StructureStep = {
  no: string;
  name: string;
  en: string;
  desc: string;
};

export type Track = {
  slug: string;
  name: string;
  desc: string;
};

export type Conference = {
  name: string;
  slogan: string;
  lead: string;
  host: string;
  email: string;
  url: string;
  shareImage: string | null;
  about: About;
  structure: StructureStep[];
  tracks: Track[];
};

const c = raw as {
  site: {
    name: string;
    slogan: string;
    lead: string;
    host: string;
    email: string;
    url: string;
    shareImage: string | null;
  };
  about: About;
  structure: StructureStep[];
  tracks: Track[];
};

export const conference: Conference = {
  name: c.site.name,
  slogan: c.site.slogan,
  lead: c.site.lead,
  host: c.site.host,
  email: c.site.email,
  url: c.site.url,
  shareImage: c.site.shareImage,
  about: c.about,
  structure: c.structure,
  tracks: c.tracks,
};

export default conference;
