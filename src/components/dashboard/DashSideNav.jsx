import React from "react";
import { FaDashcube, FaHome, FaList, FaTrash } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const date = new Date();

function DashSideNav() {
  return (
    <aside className="dash-side-nav">
      <div className="side-logo">
        <h3>V'sTE</h3>
      </div>
      <nav className="navbar">
        <h4>Menu</h4>
        <ul>
          <li>
            <NavLink to="/dashboard">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos">
              <FaList /> Todos
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses">
              <GoGraph /> Expenses
            </NavLink>
          </li>
          <li>
            <NavLink to="/chats">
              <FaMessage /> Chats
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logout-btn">
        <h4>General</h4>
        <ul>
          <li>
            <NavLink to="">
              <LuLogOut /> Logout
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <LuSettings /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="">
              <FaTrash /> Trash
            </NavLink>
          </li>
        </ul>
      </div>

      <p>&copy; {date.getFullYear()} by Vanessa Fuangi</p>
    </aside>
  );
}

export default DashSideNav;
