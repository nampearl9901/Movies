import moment from "moment";
import React from "react";

export default function MovieTabItems({ movie }) {
  return (
    <div className="flex p-10 rounded-lg shadow-lg shadow-slate-500 m-5">
      <img
        className="h-32 w-24 object-cover rounded shadow shadow-slate-500 "
        src={movie.hinhAnh}
      />

      <div className="ml-5">
        <p className="font-bold  text-xl text-opacity-20">{movie.tenPhim}</p>
        <div className="grid grid-cols-3 gap-5">
          {movie.lstLichChieuTheoPhim.slice(0, 6).map((item) => {
            return (
              <span
                key={item.maLichChieu}
                className="p-2 m-4  rounded shadow shadow-slate-600 font-mono font-bold text-emerald-400 "
              >
                {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY HH:MM ")}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
