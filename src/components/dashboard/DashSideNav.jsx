import React from "react";
import { FaDashcube, FaHome, FaList, FaTrash } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";

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
            <Link className="active">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link>
              <FaList /> Todos
            </Link>
          </li>
          <li>
            <Link>
              <GoGraph /> Expenses
            </Link>
          </li>
          <li>
            <Link>
              <FaMessage /> Chats
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logout-btn">
        <h4>General</h4>
        <ul>
          <li>
            <Link>
              <LuLogOut /> Logout
            </Link>
          </li>
          <li>
            <Link>
              <LuSettings /> Settings
            </Link>
          </li>
          <li>
            <Link>
              <FaTrash /> Trash
            </Link>
          </li>
        </ul>
      </div>

      <p>&copy; {date.getFullYear()} by Vanessa Fuangi</p>
    </aside>
  );
}

export default DashSideNav;
