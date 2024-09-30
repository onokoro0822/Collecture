// app/layout.tsx
import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import './globals.css';

export const metadata = {
  title: "Collecture",
  description: "コレクション管理アプリ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
