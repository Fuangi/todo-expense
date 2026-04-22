import React from "react";

function DashSideNav() {
  return (
    <div className="dash-side-nav">
      <nav className="navbar">
        <li>Dashboard</li>
        <li>Todos</li>
        <li>Expense</li>
        <li>Chats</li>
        <li>Trash</li>
      </nav>
      <div className="logout-btn">
        <p>Logout</p>
      </div>
    </div>
  );
}

export default DashSideNav;
