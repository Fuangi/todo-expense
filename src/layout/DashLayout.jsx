import React from "react";
import DashSideNav from "../components/dashboard/DashSideNav";
import DashTopNav from "../components/dashboard/DashTopNav";
import { Outlet } from "react-router-dom";

function DashLayout({children}) {
  return (
    <div className="dashboard-container">
      <DashSideNav />
      <div className="main-wrapper">
        <DashTopNav />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashLayout;
