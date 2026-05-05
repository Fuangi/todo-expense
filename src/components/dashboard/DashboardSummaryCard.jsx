import React from "react";

function DashboardSummaryCard() {
  return (
    <div className="summary-card">
      <h1>To-do List Summary Card</h1>
      <p>You have 50 current tasks</p>
      <p>You have 10 completed, 12 uncompleted and 28 pending tasks</p>
      <button>Continue to Todos</button>
    </div>
  );
}

export default DashboardSummaryCard;
