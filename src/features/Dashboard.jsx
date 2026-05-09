import React from "react";
import DashSideNav from "../components/dashboard/DashSideNav";
import DashLayout from "../layout/DashLayout";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxAvatar, RxCaretUp } from "react-icons/rx";
import { taskSummaryData } from "../assets/dashboardData";
import DashTaskSummaryCard from "../components/dashboard/DashTaskSummaryCard";
import DashTaskMiniView from "../components/dashboard/DashTaskMiniView";

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

        <div className="task-summary ">
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
          <div className="task-analysis-graph analysis-card">
            <h3>Task analysis</h3>
          </div>
          <div className="reminders intro-btns analysis-card">
            <h3>Reminders</h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              accusamus!
            </h4>
            <p>Mon @ 07:00 AM - 11:00 AM</p>
            <button className="dashboard-main">Start Task</button>
          </div>
          <div className="tasks-mini-view analysis-card">
            <h3>
              Tasks <span>+ New</span>
            </h3>
            <DashTaskMiniView />
            <DashTaskMiniView />
            <DashTaskMiniView />
          </div>
        </div>

        <div className="expense-chat-summary">
          <div className="chats-mini-view">
            <h3>Chats</h3>
            <div className="mini-chats">
              <DashTaskMiniView />
              <DashTaskMiniView />
              <DashTaskMiniView />
            </div>
          </div>
          <div className="expense-graph">
            <h3>Your Expenses</h3>
          </div>
          <div className="time-summary dashboard-main">
            <h3>Total Time</h3>
          </div>
        </div>
      </section>
    </DashLayout>
  );
}

export default Dashboard;
