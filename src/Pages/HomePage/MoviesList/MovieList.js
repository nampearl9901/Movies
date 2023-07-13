import React, { useEffect, useState } from "react";
import { moiveService } from "../../../service/movie.service";

import MovieItem from "./MovieItem";

export default function MovieList() {
  const [moviedata, Setmoviesdata] = useState({});

  const fetchMovies = async ({ page, pageSize = 10 }) => {
    const params = {
      maNhom: "GP01",
      soTrang: page,
      soPhanTuTrenTrang: pageSize,
    };
    try {
      const res = await moiveService.getMovies(params);
      Setmoviesdata(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies({});
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-6 mt-10">
      {moviedata.items?.map((item) => (
          <MovieItem key={item.maPhim} movie={item} />
        ))}
      </div>
    </div>
  );
}
