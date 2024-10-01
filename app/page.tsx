// app/page.tsx（ホームページ）
import React from "react";
import Link from "next/link";

const HomePage = () => {
  const coins = ["1", "5", "10", "50", "100", "500"];

  return (
    <div className="p-8">
      <h1 className="text-center mb-4">硬貨の登録・閲覧ページへ</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {coins.map((coin) => (
          <Link key={coin} href={`/coin/${coin}`}>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              {coin}円玉
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
