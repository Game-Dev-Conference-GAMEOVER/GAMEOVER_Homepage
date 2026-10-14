import { asset } from "@/lib/asset";
import { Eyebrow, Section, Title } from "./ui";

/*
 * 함께하는 동아리와 사업단 로고.
 *
 * 로고는 바뀌는 일이 거의 없고 시트 문항도 아니라 여기 목록으로 둔다.
 * 파일은 public/images/logos/ 에 흰색·투명 배경으로 들어 있다.
 * 정적 내보내기라 next/image 대신 img 를 쓰고 경로에 배포 경로를 붙인다.
 */
type Logo = { name: string; file: string };

const CLUBS: Logo[] = [
  { name: "동명대 UPTRAND", file: "/images/logos/club-uptrand.png" },
  { name: "동명대 GIZMO", file: "/images/logos/club-gizmo.png" },
  { name: "부경대 WAP", file: "/images/logos/club-wap.png" },
  { name: "울산대 GG", file: "/images/logos/club-gg.png" },
  { name: "울산대 Division", file: "/images/logos/club-division.png" },
  { name: "동의대 NEWBIES", file: "/images/logos/club-newbies.png" },
  { name: "부산대 APPTIVE", file: "/images/logos/club-apptive.png" },
  { name: "경남대 WONDERFORGE", file: "/images/logos/club-wonderforge.png" },
  { name: "경남대 MEVENDEA", file: "/images/logos/club-mevendea.png" },
];

const SPONSORS: Logo[] = [
  { name: "동명대 앵커사업단", file: "/images/logos/biz-tu-anchor.png" },
  { name: "부산앵커센터", file: "/images/logos/biz-busan-anchor.png" },
];

function LogoGrid({ logos, cols }: { logos: Logo[]; cols: string }) {
  return (
    <ul className={`grid ${cols} items-center gap-x-8 gap-y-10`}>
      {logos.map((l) => (
        <li key={l.file} className="flex items-center justify-center">
          {/* 흰색·투명 로고라 어두운 바탕에 바로 얹는다. 저마다 비율이 달라 높이로 맞춘다. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(l.file)}
            alt={l.name}
            className="max-h-10 w-auto max-w-[9rem] object-contain opacity-80 transition hover:opacity-100 md:max-h-12"
          />
        </li>
      ))}
    </ul>
  );
}

export function PartnersSection() {
  return (
    <Section id="partners" className="border-t border-line">
      <Eyebrow>With</Eyebrow>
      <Title>함께하는 곳</Title>

      <div className="mt-12">
        <p className="text-xs tracking-wider text-accent">참여 동아리</p>
        <div className="mt-6">
          <LogoGrid logos={CLUBS} cols="grid-cols-3 sm:grid-cols-4 lg:grid-cols-5" />
        </div>
      </div>

      <div className="mt-16">
        <p className="text-xs tracking-wider text-accent">후원</p>
        <div className="mt-6 max-w-md">
          <LogoGrid logos={SPONSORS} cols="grid-cols-2" />
        </div>
      </div>
    </Section>
  );
}
