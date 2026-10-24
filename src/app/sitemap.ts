import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/asset";

/*
 * /sitemap.xml 을 정적으로 굽는다. 검색엔진에 어떤 주소가 있는지 알려 준다.
 *
 * 라우트는 메인(/) 하나뿐이다. 세션 상세·연사 안내 페이지는 없으므로
 * 넣지 않는다(없는 주소를 올리면 오히려 색인에 해가 된다).
 *
 * 배포 주소를 모르는 로컬 개발에서는 빈 사이트맵이 된다 — 절대 주소가 없으면
 * 사이트맵에 쓸 값이 없기 때문이다. 배포 때는 워크플로가 SITE_URL 을 넣어 준다.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = absoluteUrl("/");
  if (!home) return [];

  const now = new Date();
  return [
    { url: home, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];
}
