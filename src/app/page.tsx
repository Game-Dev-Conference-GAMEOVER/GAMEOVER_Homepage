import { AboutSection } from "@/components/AboutSection";
import { EditionsSection } from "@/components/EditionsSection";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingHero } from "@/components/LandingHero";
import { PartnersSection } from "@/components/PartnersSection";
import { SiteFooter } from "@/components/SiteFooter";

/**
 * 전면(범용 소개) 페이지.
 *
 * 특정 회차가 아니라 컨퍼런스 자체를 소개한다. 올해 행사의 상세 기록은
 * /2026/ 아카이브로 넘기고, 여기서는 정체성(실패의 재발 방지)과 지난 회차
 * 입구만 보여준다. 날짜가 바뀌어도 이 페이지는 고치지 않아도 되는 것을 목표로 한다.
 */
export default function Home() {
  return (
    <>
      <LandingHeader />
      <main>
        <LandingHero />
        <AboutSection />
        <EditionsSection />
        <PartnersSection />
      </main>
      <SiteFooter />
    </>
  );
}
