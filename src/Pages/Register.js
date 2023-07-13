import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { userServ } from "service/user.service";
import { useDispatch } from "react-redux";
import { SET_REGISTER } from "redux/constants/userContants";
import "./scss/register.scss";

export default function Register() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    userServ
      .postRegister(values)
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: SET_REGISTER,
          payload: res.data.content,
        });
        message.success("tạo Tài Khoản Thành Công!");
        setTimeout(() => {
          navigate("/login");
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
      });
  };

  return (
    <div className=" body1">
      <div className="container ">
        <div className="form ">
          <div className="content groupForm  ">
            <h1>Register</h1>
            <Form
              onFinish={onFinish}
              layout="vertical"
              className=" groupForm  "
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                name="taiKhoan"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Bị Thiếu Rồi!!",
                  },
                ]}
              >
                <Input className="inputText" placeholder="tài Khoản" />
              </Form.Item>

              <Form.Item
                name="matKhau"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Nhập Mật Khẩu Vô Đi Ba!",
                  },
                ]}
              >
                <Input.Password placeholder="Mật Khẩu " className="inputText" />
              </Form.Item>
              {/* ///email */}
              <Form.Item
                className="group"
                name="email"
             
                rules={[
                  {
                    type: "email",
                    
                    message: "Email không hợp lệ!!",
                  },
                  {
                    required: true,
                    message: "vui lòng nhập Email",
                  },
                ]}
              >
                <Input className="inputText" placeholder="Email" />
              </Form.Item>
              {/* email */}
              {/* ///sdt */}
              <Form.Item
                name="soDt"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Số điện thoại bị thiếu",
                  },
                ]}
              >
                <Input className="inputText" placeholder="Số Điện Thoại" />
              </Form.Item>
              {/* ////sdt */}
              {/* ///ho và tên*/}
              <Form.Item
                name="hoTen"
                className="group"
                rules={[
                  {
                    required: true,
                    message: "Họ và tên",
                  },
                ]}
              >
                <Input className="inputText" placeholder="Họ Và Tên" />
              </Form.Item>
              {/* ////họ và tên */}

              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <Button className="btn" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
           
          </div>
          {/*  */}
          <div className="container3">
            <div id="containerid"></div>
          </div>
        </div>
        <div className=" items-center justify-center ">
              <p href="" className="text-center">
                Bạn đã có tài khoản!
                <NavLink className="text" to="/login">
                  Đăng Nhập!
                </NavLink>
              </p>
            </div>
      </div>

    </div>
  );
}
