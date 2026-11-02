import { conference } from "@/data/conference";
import { Button } from "./ui";
import { TypedSlogan } from "./TypedSlogan";

/**
 * 전면 페이지의 첫 화면. 특정 회차의 날짜·장소가 아니라, 해마다 이어지는
 * 컨퍼런스의 정체성과 슬로건을 내세운다. 날짜가 바뀌어도 고치지 않아도 되게,
 * 회차 정보는 여기 넣지 않고 아래 '지난 회차'에서 다룬다.
 */
export function LandingHero() {
  const site = conference;

  return (
    <section className="relative overflow-hidden border-b border-line px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
      <div className="mx-auto w-full max-w-5xl">
        <p className="display text-sm tracking-[0.18em] text-accent uppercase">
          Annual Conference · 부울경 게임 개발 동아리 연합
        </p>

        <TypedSlogan
          text={site.slogan}
          className="mt-6 text-4xl leading-[1.15] font-extrabold text-ink md:text-6xl"
        />

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          실패를 숨기지 않고 공유하는 게임 개발 컨퍼런스. 해마다 한 번, 직접 만들어 본 사람과
          지금 업계에서 일하는 사람이 한자리에 모여 프로젝트에서 실제로 겪은 이야기를 나눕니다.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/2026/">2026 기록 보기</Button>
          <Button href="#about" variant="outline">
            무엇을 하는 자리인가
          </Button>
        </div>
      </div>

      {/* 거대한 워드마크. 화면 밖으로 잘려 나가는 배경 요소라 읽히지 않아도 된다. */}
      <div
        aria-hidden
        className="display pointer-events-none absolute -right-6 -bottom-10 hidden text-[10rem] leading-none text-surface select-none md:block"
      >
        {site.name}
      </div>
    </section>
  );
}
