import { Spin } from "antd";
import React, { Suspense } from "react";


const SignUp = React.lazy(() => import("@/pages/auth/SignUp"));
const Login = React.lazy(() => import("@/pages/auth/Login"));

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const LazyLoad = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      }
    >
      {children}
    </Suspense>
  );
};

const adminRouters = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export default adminRouters;
