import React, { useEffect, useState } from "react";
import { moiveService } from "../../../service/movie.service";
import { Tabs } from "antd";
import MovieTabItems from "./MovieTabItems";
import Spinner from "../../../Components/spinner/Spinner";

export default function MovieTabs() {
  let [dataraw, setDataRaw] = useState([]);

  // const [isloading, setisloading] = useState(false);

  useEffect(() => {
    //setisloading(true);
    moiveService
      .getMoviesBytheater()
      .then((res) => {
        // setisloading(false);

        console.log(res);

        setDataRaw(res.data.content);
      })
      .catch((err) => {
        //setisloading(false);
        console.log(err);
      });
  }, []);

  let renderHeThongRaprap = () => {
    return dataraw.map((hethongRap, index) => {
      console.log("hethongRap: ", hethongRap);
      return (
        <Tabs.TabPane
          tab={<img className="w-20 h-20" src={hethongRap.logo} />}
          key={index}
        >
          <Tabs tabPosition="left" defaultActiveKey="1">
            {hethongRap.lstCumRap.map((cumRap) => {
              return (
                <Tabs.TabPane
                  tab={<div className="w-55">{cumRap.tenCumRap}</div>}
                  key={cumRap.maCumRap}
                >
                  {cumRap.danhSachPhim.map((phim) => {
                    return <MovieTabItems key={phim.maPhim} movie={phim} />;
                  })}
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </Tabs.TabPane>
      );
    });
  };

  return (
    <div className="pb-96 container mt-20 ">
      <hr />
      <Tabs className="mt-20 " tabPosition="left" defaultActiveKey="1">
        {renderHeThongRaprap()};
      </Tabs>
    </div>
  );
}
