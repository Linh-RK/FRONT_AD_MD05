import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink to="/admin">Dashboard</NavLink>, "1", <PieChartOutlined />),

  getItem("Manager", "sub1", <DesktopOutlined />, [
    getItem(<NavLink to="/admin">Dash Board</NavLink>, "4"),
    getItem(<NavLink to="/admin/banner">Banner</NavLink>, "5"),
    getItem(<NavLink to="/admin/booking">Booking</NavLink>, "6"),
    getItem(<NavLink to="/admin/categories">Category</NavLink>, "7"),
    getItem(<NavLink to="/admin/cinema">Cinema</NavLink>, "8"),
    getItem(<NavLink to="/admin/comment">Comment</NavLink>, "9"),
    getItem(<NavLink to="/admin/festival">Festival</NavLink>, "10"),
    getItem(<NavLink to="/admin/movie">Movie</NavLink>, "11"),
    getItem(<NavLink to="/admin/news">News</NavLink>, "12"),
    getItem(<NavLink to="/admin/payment">Payment</NavLink>, "13"),
    getItem(<NavLink to="/admin/room">Room</NavLink>, "14"),
    getItem(<NavLink to="/admin/seat">Seat</NavLink>, "15"),
    getItem(<NavLink to="/admin/showtime">Showtime</NavLink>, "16"),
    getItem(<NavLink to="/admin/snack">Snack</NavLink>, "17"),
    getItem(<NavLink to="/admin/ticket-price">Ticket</NavLink>, "18"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
export default function MenuLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Sider
        className="min-h-[calc(100vh-65px)]"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          className="scrollable-sidebar"
        />
      </Sider>
    </>
  );
}
