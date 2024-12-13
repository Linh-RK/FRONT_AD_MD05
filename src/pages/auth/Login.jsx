import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox, notification, Form } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../services/authService";

export default function Login() {
  const [form] = Form.useForm(); // Tạo form instance
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const values = await form.validateFields(); // Validate dữ liệu form
      await dispatch(login(values))
        .unwrap()
        .then((response) => {
          const roles = response?.roles;

          if (roles.some((item) => item.roleName === "ROLE_ADMIN")) {
            navigate("/signup");
          } else if (roles.some((item) => item.roleName === "ROLE_USER")) {
            navigate("/");
          }
          notification.success({
            message: "Thành công",
            description: "Đăng nhập thành công",
          });
        })
        .catch(() => {
          notification.error({
            message: "Thất bại",
          });
        });
    } catch (errorInfo) {
      // Xử lý lỗi validate (nếu có)
      console.error("Validation failed:", errorInfo);
    }
  };

  return (
    <>
      <div
        className="min-h-screen bg-gray-100 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp')",
        }}
      >
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-600">AZNCC</h1>
            <p className="text-gray-500">Sign in to continue</p>
          </div>
          <Form form={form} layout="vertical">
            {" "}
            {/* Sử dụng Form */}
            <Form.Item
              label="UserName"
              name="username"
              rules={[{ required: true, message: "Username is required" }]}
            >
              <Input
                size="large"
                prefix={<MailOutlined />}
                placeholder="Enter your username"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password
                size="large"
                prefix={<LockOutlined />}
                placeholder="Enter your password"
              />
            </Form.Item>
            <Button
              onClick={handleClick}
              type="primary"
              size="large"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none"
            >
              Sign In
            </Button>
          </Form>
          <div className="text-center my-4 text-gray-500">- OR -</div>
          <div className="flex justify-center space-x-4">
            <Button className="bg-blue-700 text-white border-none hover:bg-blue-800">
              F
            </Button>
            <Button className="bg-red-500 text-white border-none hover:bg-red-600">
              G
            </Button>
            <Button className="bg-black text-white border-none hover:bg-gray-800">
              G
            </Button>
            <Button className="bg-blue-400 text-white border-none hover:bg-blue-500">
              T
            </Button>
          </div>
          <div className="text-center mt-6">
            <p>
              Don't have an account?
              <NavLink className="ml-3" to={"/signup"}>
                Sign-In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
