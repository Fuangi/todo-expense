import React from "react";
import DashSideNav from "../components/dashboard/DashSideNav";
import DashLayout from "../layout/DashLayout";

function Dashboard() {
  return (
    <DashLayout>
      <section className="dashboard">
        <div className="left-container">
          <div className="todo-summary">Todo List summary</div>
          <div className="expense-summary">Expense summary</div>
        </div>
        <div className="right-container">
          <div className="chats"> Your chats</div>
          <div>Your Collaborators</div>
        </div>
      </section>
    </DashLayout>
  );
}

export default Dashboard;
