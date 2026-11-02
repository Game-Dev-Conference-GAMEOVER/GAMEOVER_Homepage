import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { ArchiveBanner } from "@/components/ArchiveBanner";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PartnersSection } from "@/components/PartnersSection";
import { ProgramSection } from "@/components/ProgramSection";
import { SiteFooter } from "@/components/SiteFooter";
import { VenueSection } from "@/components/VenueSection";
import { conference } from "@/data/conference";
import { edition2026 } from "@/data/editions/2026";

/**
 * 2026 회차 아카이브.
 *
 * 연례 전환 전까지 전면(/)에 있던 행사 페이지 그대로다. 발표자료가 걸린
 * 타임테이블을 포함한 그해의 전체 기록을 이 주소에 보존한다. 모든 회차 정보는
 * editions/2026.ts 에서 오고, 이름·성격 등 상시 정보만 conference 에서 온다.
 */
const edition = edition2026;

export const metadata: Metadata = {
  title: `${conference.name} ${edition.year} — ${edition.dateLabel}`,
  description: `${edition.dateLabel} · ${edition.venue.name}에서 열린 ${conference.name} ${edition.year} 기록. 발표자료와 타임테이블을 공개합니다.`,
  alternates: { canonical: `/${edition.year}/` },
};

export default function Edition2026() {
  return (
    <>
      <JsonLd edition={edition} />
      <Header />
      <ArchiveBanner />
      <main>
        <Hero edition={edition} />
        <AboutSection />
        <ProgramSection edition={edition} />
        <VenueSection edition={edition} />
        <FaqSection edition={edition} />
        <PartnersSection />
      </main>
      <SiteFooter />
    </>
  );
}
