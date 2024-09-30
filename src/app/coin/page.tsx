import React from "react";
import Coinbox from "./coinbox"

const Coin = () => {
    return (
        <div>
            <div className="p-8 bg-yellow-200 text-center rounded-md">
                このページを硬貨の種類ごとに作る<br />
                ここは何円玉について登録・閲覧するか見るページにする
            </div>
            <div>
                <Coinbox />
            </div>
        </div>

    );
};

export default Coin;
