import React from "react";
import DashSideNav from "../components/dashboard/DashSideNav";
import DashLayout from "../layout/DashLayout";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxCaretUp } from "react-icons/rx";
import { taskSummaryData } from "../assets/dashboardData";
import DashTaskSummaryCard from "../components/dashboard/DashTaskSummaryCard";

function Dashboard() {
  return (
    <DashLayout>
      <section className="dashboard">
        <div className="dash-intro">
          <div>
            <h1>My Dashboard</h1>
            <p>
              Plan, prioritize, accomplish and track everything that matters.
            </p>
          </div>
          <div className="intro-btns">
            <button className="dashboard-main">Add Task</button>
            <button>Add Expense</button>
          </div>
        </div>

        <div className="task-summary">
          {taskSummaryData.map((summary, i) => (
            <DashTaskSummaryCard
              className={`${i === 0 && "dashboard-main"}`}
              key={i}
              summaryName={summary.summaryName}
              qty={summary.qty}
              numChanged={summary.numChanged}
              changeState={summary.changeState}
            />
          ))}
        </div>

        <div className="task-analysis">
          <div className="task-analysis-graph">
            <h3>Task analysis</h3>
          </div>
          <div className="reminders intro-btns">
            <h3>Reminders</h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              accusamus!
            </h4>
            <p>Mon @ 07:00 AM - 11:00 AM</p>
            <button className="dashboard-main">Start Task</button>
          </div>
          <div className="tasks-mini-view">
            <h3>
              Tasks <span>+ New</span>
            </h3>
            <p>
              <span>icon</span> Task Title
            </p>
            <p>category</p>
          </div>
        </div>

        <div className="expense-chat-summary">
          <div className="chats"> Your chats</div>
        </div>
        <div className="expense-graph">Your Collaborators</div>
      </section>
    </DashLayout>
  );
}

export default Dashboard;
