import React from "react";
import Sidebar from "./components/layout/Sidebar.jsx";
import Header from "./components/layout/Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen   ">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6  bg-gray-50 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;