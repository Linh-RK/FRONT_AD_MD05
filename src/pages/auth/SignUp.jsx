import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Button, Checkbox, Form, notification } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { regiter } from "../../services/authService";

export default function SignUp() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async () => {
    try {
      const values = await form.validateFields();

      await dispatch(regiter(values))
        .unwrap()
        .then(() => {
          navigate("/login");
          notification.success({
            message: "Thành công",
            description: "Đăng kí thành công",
          });
        });
    } catch (error) {

    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp')",
      }}
    >
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">VELZON</h1>
          <p className="text-gray-500">Sign up to continue to Velzon.</p>
        </div>
        <Form form={form} name="signup" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Enter your username"
            />
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Full name is required" }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined />}
              placeholder="Enter your full name"
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: "Phone number is required" },{
              pattern: /^(?:\+84|0)(3|5|7|8|9)\d{8}$/,
              message: "Số điện thoại không hợp lệ",
            },]}
          >
            <Input
              size="large"
              prefix={<PhoneOutlined />}
              placeholder="Enter your phone number"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" },
              {
                type: "email",
                message: "Email không hợp lệ",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="Enter your email"
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none"
            >
              Sign Up
            </Button>
          </Form.Item>
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
            Already have an account? <NavLink to={"/signin"}>Sign-In</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
