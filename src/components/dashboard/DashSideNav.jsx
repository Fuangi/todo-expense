import React from "react";
import { FaDashcube, FaHome, FaList, FaTrash } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";

function DashSideNav() {
  return (
    <aside className="dash-side-nav">
      <nav className="navbar">
        <ul>
          <li>
            <Link>
              <FaHome />Home
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
          <li>
            <Link>
              <FaTrash /> Trash
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logout-btn">
        <p>
          <Link>
            <LuLogOut /> Logout
          </Link>
        </p>
      </div>
    </aside>
  );
}

export default DashSideNav;
