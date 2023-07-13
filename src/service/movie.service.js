import axios from "axios";
import { userInforLocal } from "./local.service";
import { BASE_URL, configHeaders, https } from "./url.config";

export const moiveService = {
  getBanner: () => {
    // return axios({
    //   url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`,
    //   method: "GET",
    //   headers: configHeaders(),
    // });
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getMovies: (params) => {
    //cahs 1
    // return axios({
    //   url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhimPhanTrang`,
    //   method: "GET",
    //   headers: configHeaders(),
    //   params: params,

    // });

    //cách 2
    let uri = "/api/QuanLyPhim/LayDanhSachPhimPhanTrang";
    return https.get(uri, params);

    // get thì sài params
    //post , updata mới sài data
  },
  getMoviesBytheater: () => {
    let userinfo = userInforLocal.get();
    // return axios({
    //   url: `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
    //   method: "GET",
    //   headers: configHeaders(),
    // });
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
  getMoviesId: () => {
    let userinfor = userInforLocal.get();
    return https.get("/api/QuanLyPhim/LayThongTinPhim/id");
  },
};
