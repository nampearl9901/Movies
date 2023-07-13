import React, { useEffect } from "react";
import { Carousel } from "antd";
import { moiveService } from "../../../service/movie.service";
import { useState } from "react";

export default function HomeCarousel() {
  // dữ liệu cần sài 1 trang duy nhât thì sài state
  //còn dữ liệu cần sài ở nhiều trang thì lưu trên stores

  const [banners, SetBanner] = useState([]);

  const fetchBanner = async () => {
    //---------------------------------
    // call api => banner
    //moiveService.getbanner();
    //------------------------------
    // try async await
    try {
      const res = await moiveService.getBanner();
      SetBanner(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  return (
    <div>
      <Carousel>
        {banners.map((item) => {
          return (
            <div key={item.maBanner}>
              <img className="h-96 object-cover w-full" src={item.hinhAnh} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
