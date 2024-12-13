import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import MenuLayout from "./MenuLayout";

export default function AdminLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex h-full">
        <MenuLayout />
        <div className="bg-[#f3f3f9] flex-1 max-h-[100vh-64px] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
