import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/asset";

/*
 * /robots.txt 를 정적으로 굽는다. 전체 색인을 허용하고 사이트맵 위치를 알려 준다.
 *
 * 자체 도메인이나 계정 루트(username.github.io) 에서는 크롤러가 그대로 읽는다.
 * 저장소 하위 경로(/저장소이름/) 배포에서는 크롤러가 도메인 루트의 robots.txt 를
 * 보므로 이 파일이 직접 쓰이지는 않지만, 사이트맵은 Search Console 에 바로 제출할 수 있다.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(sitemap ? { sitemap } : {}),
  };
}
