import React from "react";

const Coinbox = () => {
  // 昭和元年（1926）から平成31年（2019）までのデータを生成
  const currentYear = new Date().getFullYear();
  const showaStartYear = 1926;
  const showaEndYear = 1989;
  const heiseiStartYear = 1989;
  const heiseiEndYear = 2019;
  const reiwaStartYear =2019;
  const reiwaEndYear = currentYear;

  // 共通のボックス生成関数
  const generateEraBoxes = (startYear: number, endYear: number, eraName: string) => {
    const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
    return years.map((year) => (
        <div key={year} className="flex flex-col items-center justify-center rounded-md shadow-md gap-2">
            <div className="w-[150px] h-[150px] bg-blue-500 text-white flex items-center justify-center rounded-md shadow-md">
                未取得
            </div>
            <div>
                {year === startYear ? `${eraName}元年` : `${eraName}${year - startYear + 1}年`}
            </div>
        </div>

    ));
  };

  return (
    <div
      className="grid gap-4 p-8"
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(180px, 1fr))`,
        gridAutoRows: '250px',
      }}
    >
      {/* 昭和のボックスを生成 */}
      {generateEraBoxes(showaStartYear, showaEndYear, "昭和")}
      
      {/* 平成のボックスを生成 */}
      {generateEraBoxes(heiseiStartYear, heiseiEndYear, "平成")}

      {generateEraBoxes(reiwaStartYear, reiwaEndYear, "令和")}
    </div>
  );
};

export default Coinbox;

