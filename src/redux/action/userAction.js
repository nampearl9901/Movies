import { message } from "antd";
import { userInforLocal } from "../../service/local.service";
import { userServ } from "../../service/user.service";
import { SET_LOGIN } from "../constants/userContants";

export const setLoginActionService = (values, handleSuccess) => {
  return (dispatch) => {
    userServ
      .postLogin(values)
      .then((res) => {
        console.log(res);
        //lưu thông tin đăng nhập  xuống localStorage
        userInforLocal.set(res.data.content);

        dispatch({
          type: SET_LOGIN,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
      });
    handleSuccess();
  };
};
