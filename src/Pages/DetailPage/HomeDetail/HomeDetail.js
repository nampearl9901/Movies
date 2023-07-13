import React, { useState } from "react";
import { Button } from "antd";

export default function HomeDetail() {
  let [data, setData] = useState([]);

  return (
    <div className="container">
      <div className=" informovies m-10">
        <div className="imgmovies ">
          <div className="border border-black p-4 rounded-lg">
            <a>
              <img alt="" className="w-full h-60 object-cover" />
            </a>

            <h2 className="text-2xl"></h2>
            <p></p>
            <Button>Đặt vé</Button>
          </div>
        </div>
      </div>
      <div className="infortext"></div>
    </div>
  );
}
