import type { MetadataRoute } from "next";
import { editions } from "@/data/editions";
import { absoluteUrl } from "@/lib/asset";

/*
 * /sitemap.xml 을 정적으로 굽는다. 검색엔진에 어떤 주소가 있는지 알려 준다.
 *
 * 전면(/)과 각 회차 아카이브(/2026/ 등)를 올린다. 회차가 늘면 editions 에서
 * 자동으로 따라 붙는다.
 *
 * 배포 주소를 모르는 로컬 개발에서는 빈 사이트맵이 된다 — 절대 주소가 없으면
 * 사이트맵에 쓸 값이 없기 때문이다. 배포 때는 워크플로가 SITE_URL 을 넣어 준다.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = absoluteUrl("/");
  if (!home) return [];

  const now = new Date();
  const editionRoutes: MetadataRoute.Sitemap = editions.flatMap((e) => {
    const url = absoluteUrl(`/${e.year}/`);
    return url ? [{ url, lastModified: now, changeFrequency: "yearly" as const, priority: 0.8 }] : [];
  });

  return [
    { url: home, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...editionRoutes,
  ];
}
