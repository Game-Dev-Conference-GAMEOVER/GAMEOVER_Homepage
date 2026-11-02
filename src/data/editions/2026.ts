import type { Edition } from "./types";

/**
 * 2026 회차 — 제1회. 동결된 기록이다.
 *
 * 전환 시점의 content.json 값을 그대로 떠서 박았다. 이후 구글 시트를 고쳐도
 * 이 회차의 아카이브(/2026/)는 바뀌지 않는다. 발표자료(slides)는 공개에
 * 동의한 연사만 담았다 — 하상석(industry-1) 대표님은 비공개 요청이라 뺐다.
 */
export const edition2026: Edition = {
  year: 2026,
  no: "제1회",
  status: "past",
  dateLabel: "2026년 10월 31일 (토)",
  timeLabel: "09:30 ~ 18:10",
  fee: "무료",
  applyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd0A2eNWlyCQG0KL_oU8xe7tlNwGzSye7eTCJSlkLt40ikBHg/viewform",
  applyDeadline: "10월 24일 (토)",
  summary: "현직자·대학생 연사 세션, 패널 토크, 네트워킹",
  venue: {
  "name": "동명대학교 대학본관 107호",
  "address": "부산광역시 남구 신선로 428",
  "transit": [
    "대학본관(1번 건물) 107호에서 진행합니다.",
    "부산 · 울산 지역에서 오시는 분들을 위한 안내도 함께 올리겠습니다."
  ],
  "mapUrl": "",
  "note": "토요일 개최입니다. 건물 출입 안내는 확정되는 대로 공지합니다."
},
  slides: {
  "industry-2": "/slides/industry-2.pdf",
  "indie-1": "/slides/indie-1.pdf",
  "indie-2": "/slides/indie-2.pdf",
  "indie-3": "/slides/indie-3.pdf",
  "indie-4": "/slides/indie-4.pdf"
},
  faq: [
  {
    "q": "누가 참석할 수 있나요?",
    "a": "전공과 학년에 상관없이 누구나 참석할 수 있습니다. 동명대학교 재학생을 비롯해 부산 · 울산 지역의 학생과 개발자에게 열려 있습니다. 개발 경험이 없어도 괜찮습니다."
  },
  {
    "q": "참가비가 있나요?",
    "a": "무료입니다. 중식과 다과도 제공합니다."
  },
  {
    "q": "트랙이 나뉘나요?",
    "a": "나뉘지 않습니다. 한 공간에서 모든 발표를 이어서 듣습니다. 오전에는 기업, 오후에는 인디를 다룹니다."
  },
  {
    "q": "일부 세션만 들어도 되나요?",
    "a": "됩니다. 세션은 35분, 쉬는 시간은 10분이라 중간에 드나드셔도 됩니다. 다만 럭키 드로우는 모든 세션에 참석하신 분만 응모할 수 있습니다."
  },
  {
    "q": "신청은 어떻게 하나요?",
    "a": "이 페이지의 「참가 신청하기」 버튼으로 신청하실 수 있습니다. 마감은 10월 24일 (토)입니다."
  },
  {
    "q": "발표 자료는 공개되나요?",
    "a": "연사 동의를 받은 자료에 한해 행사 후 공유할 예정입니다."
  }
],
  schedule: [
  {
    "start": "09:30",
    "end": "10:00",
    "kind": "휴식",
    "title": "접수 및 등록",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "명찰과 팜플렛을 받고 시작합니다",
    "photo": null
  },
  {
    "start": "10:00",
    "end": "10:10",
    "kind": "공통",
    "title": "개회식",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "하루의 흐름을 안내합니다",
    "photo": null
  },
  {
    "start": "10:10",
    "end": "10:45",
    "kind": "기업",
    "title": "현직자 연사 1",
    "speaker": "하상석",
    "affiliation": "매직큐브 대표",
    "room": "",
    "slug": "industry-1",
    "summary": "AI 시대에서 살아남기",
    "photo": null
  },
  {
    "start": "10:45",
    "end": "10:55",
    "kind": "휴식",
    "title": "쉬는 시간 · 세션 퀴즈",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "직전 세션 내용으로 퀴즈 · 정답자에게 치킨 쿠폰",
    "photo": null
  },
  {
    "start": "10:55",
    "end": "11:30",
    "kind": "기업",
    "title": "현직자 연사 2",
    "speaker": "강현우",
    "affiliation": "넥스트스테이지 대표",
    "room": "",
    "slug": "industry-2",
    "summary": "AI를 사용한 게임 개발 사례와 실무 이야기",
    "photo": null
  },
  {
    "start": "11:30",
    "end": "11:40",
    "kind": "휴식",
    "title": "쉬는 시간 · 세션 퀴즈",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "직전 세션 내용으로 퀴즈 · 정답자에게 치킨 쿠폰",
    "photo": null
  },
  {
    "start": "11:40",
    "end": "12:10",
    "kind": "기업",
    "title": "현직자 연사 패널토크",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "하상석 · 강현우가 게임 업계 이야기를 함께 나눕니다",
    "photo": null
  },
  {
    "start": "12:10",
    "end": "13:10",
    "kind": "휴식",
    "title": "점심",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "도시락을 드립니다",
    "photo": null
  },
  {
    "start": "13:10",
    "end": "13:45",
    "kind": "인디",
    "title": "대학생 연사 1",
    "speaker": "이규빈",
    "affiliation": "울산대학교 · GG",
    "room": "",
    "slug": "indie-1",
    "summary": "실패를 퀘스트로 만들었습니다",
    "photo": null
  },
  {
    "start": "13:45",
    "end": "13:55",
    "kind": "휴식",
    "title": "쉬는 시간 · 세션 퀴즈",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "직전 세션 내용으로 퀴즈 · 정답자에게 치킨 쿠폰",
    "photo": null
  },
  {
    "start": "13:55",
    "end": "14:30",
    "kind": "인디",
    "title": "대학생 연사 2",
    "speaker": "이문빈",
    "affiliation": "국립부경대학교 · WAP",
    "room": "",
    "slug": "indie-2",
    "summary": "내가 게임을 다시 처음 만든다면",
    "photo": null
  },
  {
    "start": "14:30",
    "end": "14:40",
    "kind": "휴식",
    "title": "쉬는 시간 · 세션 퀴즈",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "직전 세션 내용으로 퀴즈 · 정답자에게 치킨 쿠폰",
    "photo": null
  },
  {
    "start": "14:40",
    "end": "15:15",
    "kind": "인디",
    "title": "대학생 연사 3",
    "speaker": "이재우",
    "affiliation": "동명대학교 · UPTRAND",
    "room": "",
    "slug": "indie-3",
    "summary": "게임잼에서 출시까지",
    "photo": null
  },
  {
    "start": "15:15",
    "end": "15:25",
    "kind": "휴식",
    "title": "쉬는 시간 · 세션 퀴즈",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "직전 세션 내용으로 퀴즈 · 정답자에게 치킨 쿠폰",
    "photo": null
  },
  {
    "start": "15:25",
    "end": "16:00",
    "kind": "인디",
    "title": "대학생 연사 4",
    "speaker": "이느하",
    "affiliation": "울산대학교",
    "room": "",
    "slug": "indie-4",
    "summary": "게임 불모지 울산에서 게임으로 살아남기",
    "photo": null
  },
  {
    "start": "16:00",
    "end": "16:10",
    "kind": "휴식",
    "title": "쉬는 시간 · 세션 퀴즈",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "직전 세션 내용으로 퀴즈 · 정답자에게 치킨 쿠폰",
    "photo": null
  },
  {
    "start": "16:10",
    "end": "16:40",
    "kind": "인디",
    "title": "대학생 연사 패널토크",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "이규빈 · 이문빈 · 이재우 · 이느하가 프로젝트 이야기를 나눕니다",
    "photo": null
  },
  {
    "start": "16:40",
    "end": "17:00",
    "kind": "공통",
    "title": "럭키 드로우",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "모든 세션에 참석하신 분은 누구나 응모할 수 있습니다",
    "photo": null
  },
  {
    "start": "17:00",
    "end": "17:10",
    "kind": "공통",
    "title": "폐회식",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "하루를 마무리합니다",
    "photo": null
  },
  {
    "start": "17:10",
    "end": "18:10",
    "kind": "공통",
    "title": "커뮤니티 시간",
    "speaker": "",
    "affiliation": "",
    "room": "",
    "slug": "",
    "summary": "연사와 참가자가 자유롭게 이야기 나누는 시간입니다",
    "photo": null
  }
],
};

export default edition2026;
