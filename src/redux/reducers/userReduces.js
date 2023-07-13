import { userInforLocal } from "../../service/local.service";
import { SET_LOGIN, SET_REGISTER } from "../constants/userContants";

let initialState = {
  userInfor: userInforLocal.get(),
};

export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN: {
      state.userInfor = payload;
      return { ...state };
    }
    case SET_REGISTER: {
      state.userInfor = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
