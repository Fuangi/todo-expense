import React from "react";
import { FaBell, FaCalendar, FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const searchPlaceHolderText = `${(<FaSearch />)} Search Text`;

function DashTopNav() {
  const date = new Date();
  return (
    <header className="dash-topnav">
      <h4>Hello, Van👋</h4>
      <input
        type="text"
        className="search"
        placeholder="🔍 Search Tasks"
      ></input>
      <ul>
        <li>
          <FaBell />
        </li>
        <li>{date.toDateString()}</li>
        <li>
          <RxAvatar className="avatar" />
        </li>
      </ul>
    </header>
  );
}

export default DashTopNav;
