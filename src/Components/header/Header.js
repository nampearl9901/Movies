import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="shadow-lg  ">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-bold text-stone-600 text-2xl">
          PearllMovies</span>
        <div className=" m-10 space-x-5 font-thin ">
          <span>Lịch Chiếu</span>
          <span>Cụm Rạp</span>
          <span>Tin Tức</span>
          <span>Ứng Dụng</span>
        </div>
        <UserNav />
      </div>
    </div>
  );
}
