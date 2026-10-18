import type { Metadata, Viewport } from "next";
import { Anton } from "next/font/google";
import { content } from "@/data/content";
import { absoluteUrl } from "@/lib/asset";
import "./globals.css";

/*
 * Anton 은 라틴 전용이라 한글을 지원하지 않는다. 큰 숫자와 영문 라벨에만 쓴다.
 * 한글은 globals.css 에서 self-host 하는 Pretendard 가 맡는다.
 */
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const { site } = content;
const title = `${site.name} — ${site.dateLabel}`;
const description = site.lead;

/*
 * 검색엔진과 공유 크롤러가 쓰는 절대 주소. 배포 주소를 모르는 로컬 개발에서는
 * undefined 가 되어 해당 항목이 통째로 빠진다. 깨진 주소를 넣느니 빼는 편이 낫다.
 */
const canonical = absoluteUrl("/");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const shareImage = absoluteUrl(site.shareImage);

export const metadata: Metadata = {
  // 상대 경로 메타데이터의 기준 주소. 배포 경로까지 포함한 SITE_URL 을 그대로 쓴다.
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: title, template: `%s · ${site.name}` },
  description,
  applicationName: site.name,
  // 검색어 매칭용 보조 신호. 과하지 않게 행사의 핵심 성격만 둔다.
  keywords: [
    site.name,
    "게임 개발 컨퍼런스",
    "게임 개발",
    "게임 개발자 행사",
    "인디 게임",
    "게임 업계",
    "부산 게임",
    "울산 게임",
    "동명대학교",
    "CHECKPOINT",
    ...content.tracks.map((t) => t.name),
  ],
  authors: [{ name: site.host }],
  creator: site.host,
  publisher: site.host,
  category: "technology",
  // 같은 내용이 여러 주소로 긁혀 점수가 갈리지 않도록 대표 주소를 못 박는다.
  alternates: canonical ? { canonical } : undefined,
  // 전화번호·메일·주소를 브라우저가 멋대로 링크로 바꾸지 않게 한다.
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    ...(canonical ? { url: canonical } : {}),
    // 크롤러는 상대 경로를 읽지 못하므로 절대 주소로 만든다. 주소를 모르면 아예 뺀다.
    images: shareImage ? [{ url: shareImage }] : undefined,
  },
  twitter: { card: "summary_large_image", title, description },
};

/*
 * 모바일 브라우저 상단 바 색을 딥블랙으로 맞춰 화면이 끊기지 않게 한다.
 * 사이트가 다크 전용이라 colorScheme 도 dark 로 고정한다.
 */
export const viewport: Viewport = {
  themeColor: "#0d0d12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={anton.variable}>
      <body>{children}</body>
    </html>
  );
}
