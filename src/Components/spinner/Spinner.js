import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => {
    return state.spinnerReducer;
  });

  return isLoading ? (
    <div className="z-50 fixed w-screen  h-screen flex justify-center items-center bg-black top-0 left-0">
      <RingLoader margin={30} size={150} color="#d4467c" />
    </div>
  ) : (
    <></>
  );
}
