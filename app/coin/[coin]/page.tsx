import React from "react";
import Coinbox from "../../coin/coinbox";
import Link from "next/link";

// generateStaticParams関数を定義して、ビルド時に生成するパスを指定します
export const generateStaticParams = async () => {
  // 有効な硬貨のリスト
  const validCoins = ["1", "5", "10", "50", "100", "500"];

  // 各硬貨に対してパラメータを生成
  return validCoins.map((coin) => ({
    coin,
  }));
};

const CoinPage = ({ params }: { params: { coin: string } }) => {
  const { coin } = params;

  // 有効な硬貨のリスト（1, 5, 10, 50, 100, 500）
  const validCoins = ["1", "5", "10", "50", "100", "500"];

  // 有効な硬貨かどうかを確認
  if (!validCoins.includes(coin)) {
    return (
      <div className="p-8 bg-red-200 text-center rounded-md">
        <p>無効な硬貨のページです。</p>
        <Link href="/" className="text-blue-500 underline">
          ホームに戻る
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="p-8 bg-yellow-200 text-center rounded-md">
        <h1>{coin}円玉の登録・閲覧ページ</h1>
        <p>ここでは{coin}円玉に関する情報を登録・閲覧することができます。</p>
      </div>
      <div>
        <Coinbox />
      </div>
    </div>
  );
};

export default CoinPage;
