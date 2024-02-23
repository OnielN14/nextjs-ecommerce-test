import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "테스트밸리 - 전자제품 사는게 즐겁다",
  description: "새 상품 구매부터 체험, 검증된 중고, 수리비 보장, 합리적인 중고판매까지 전자제품의 모든 것을 함께 하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
