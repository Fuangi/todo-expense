import React from "react";
import { RxAvatar } from "react-icons/rx";

function DashTaskMiniView() {
  return (
    <div className="mini-task">
      <RxAvatar className="category-icon" />

      <div>
        <h4>Task Name</h4>
        <p>Task description. Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default DashTaskMiniView;
