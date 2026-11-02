import { conference } from "@/data/conference";
import type { Edition } from "@/data/editions";
import { sessionsOf } from "@/data/schedule";
import { absoluteUrl } from "@/lib/asset";

/**
 * 검색엔진·공유 크롤러가 읽는 구조화 데이터(JSON-LD).
 *
 * 화면에는 보이지 않지만, 구글이 행사 날짜·장소·연사를 이해해 검색 결과에
 * 일정 카드(리치 결과)로 띄울 수 있게 해 준다. 값은 모두 content(시트)에서
 * 나오므로 시트를 고치면 여기도 따라 바뀐다.
 */

/**
 * "2026년 10월 31일" + "09:30" → "2026-10-31T09:30:00+09:00".
 * 형식을 못 읽으면 undefined 를 돌려줘 해당 항목이 통째로 빠지게 한다.
 */
function toIso(dateLabel: string, time: string): string | undefined {
  const d = /(\d{4})\D+(\d{1,2})\D+(\d{1,2})/.exec(dateLabel);
  if (!d) return undefined;
  const t = /(\d{1,2}):(\d{2})/.exec(time);
  const pad = (s: string) => s.padStart(2, "0");
  const [, y, mo, da] = d;
  const hh = t ? t[1] : "00";
  const mm = t ? t[2] : "00";
  return `${y}-${pad(mo)}-${pad(da)}T${pad(hh)}:${pad(mm)}:00+09:00`;
}

export function JsonLd({ edition }: { edition: Edition }) {
  const venue = edition.venue;

  const [startTime, endTime] = edition.timeLabel.split(/[~\-–]/).map((s) => s.trim());
  const startDate = toIso(edition.dateLabel, startTime ?? "");
  const endDate = toIso(edition.dateLabel, endTime ?? "");
  const url = absoluteUrl(`/${edition.year}/`) ?? conference.url;
  const image = absoluteUrl(conference.shareImage);

  // 연사가 정해진 세션에서 사람만 추린다. 같은 이름이 여러 세션에 나와도 한 번만 넣는다.
  const performer = [
    ...new Map(
      sessionsOf(edition.schedule)
        .filter((e) => e.speaker)
        .map((e) => [
          e.speaker,
          {
            "@type": "Person",
            name: e.speaker,
            ...(e.affiliation ? { affiliation: e.affiliation } : {}),
          },
        ]),
    ).values(),
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${conference.name} ${edition.year}`,
    description: conference.lead,
    ...(startDate ? { startDate } : {}),
    ...(endDate ? { endDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: "ko",
    ...(url ? { url } : {}),
    ...(image ? { image: [image] } : {}),
    location: {
      "@type": "Place",
      name: venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: venue.address,
        addressCountry: "KR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: conference.host,
      ...(conference.email ? { email: conference.email } : {}),
    },
    ...(performer.length ? { performer } : {}),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      // 신청 주소가 있으면 그곳을, 없으면 사이트 자체를 가리킨다.
      ...(edition.applyUrl ? { url: edition.applyUrl } : url ? { url } : {}),
    },
  };

  // FAQ 도 구조화해 두면 검색 결과에 질문·답이 바로 펼쳐질 수 있다.
  const faq =
    edition.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: edition.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        // JSON.stringify 는 </script> 를 만들 수 없는 값만 들어가므로 그대로 넣어도 안전하다.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
    </>
  );
}
