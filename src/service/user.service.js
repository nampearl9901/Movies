import { BASE_URL, configHeaders, https } from "./url.config";
import axios from "axios";

export const userServ = {
  postLogin: (dataLogin) => {
    // return axios({
    //   url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
    //   method: "POST",
    //   data: dataLogin,
    //   headers: configHeaders(),
    // });
    let uri = "/api/QuanLyNguoiDung/DangNhap";
    return https.post(uri, dataLogin);
  },

  postRegister: (dataRegister) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    return https.post(uri, dataRegister);
  },
};
