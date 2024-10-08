// app/layout.tsx
import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import './globals.css';
import DesignProvider from "../common/providers/DesignProvider"

export const metadata = {
  title: "collecture",
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
        <DesignProvider>{children}</DesignProvider>
        <Footer />
      </body>
    </html>
  );
}
