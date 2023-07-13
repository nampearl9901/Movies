import { Button } from "antd";
import React from "react";

export default function MovieItem(props) {
  const { hinhAnh, tenPhim, moTa } = props.movie;
  return (
    <div className="border border-black p-4 rounded-lg">
      <a ><img alt="" src={hinhAnh} className="w-full h-60 object-cover" /></a>
      
      <h2 className="text-2xl">{tenPhim}</h2>
      <p>{moTa.substr(0, 100) + "..."}</p>
      <Button>Đặt vé</Button>
    </div>
  );
}
