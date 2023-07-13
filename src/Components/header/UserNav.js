import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userInforLocal } from "../../service/local.service";
import { SET_LOGIN } from "../../redux/constants/userContants";
import { message } from "antd";

export default function UserNav() {
  let userInfor = useSelector((state) => {
    return state.userReducer.userInfor;
  });

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleLogout = () => {
    //remove data local

    userInforLocal.remove();

    dispatch({
      type: SET_LOGIN,
      payload: null,
    });
    // chuyentrang

    // location.heft=> reload trang
    window.location.href = "/";
  };

  let renderContent = () => {
    if (userInfor) {
      return (
        <div>
          <span className="mr-5 text-blue-500 font-medium text-lg">
            {userInfor.hoTen}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white font-mono rounded-xl shadow-lg bg-gray-600"
          >
            Đăng Xuất
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink to="/login">
            <button className="px-4 py-2 m-3 text-white font-mono rounded-xl shadow-lg bg-amber-600">
              Đăng Nhập
            </button>
          </NavLink>

          <NavLink to="/register">
            <button className="px-4 py-2 text-white font-mono rounded-xl shadow-lg bg-rose-600">
              Đăng Ký
            </button>
          </NavLink>
        </div>
      );
    }
  };

  console.log("userInfor: ", userInfor);

  return <div>{renderContent()}</div>;
}
