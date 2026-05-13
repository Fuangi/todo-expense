import { Route, Routes } from "react-router-dom";
import Dashboard from "../features/Dashboard";
import Todo from "../features/Todo";
import Expense from "../features/Expense";
import Chats from "../features/Chats";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="todos" element={<Todo />} />
      <Route path="expenses" element={<Expense />} />
      <Route path="chats" element={<Chats />} />
      {/* <Route path="settings" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default DashboardRoutes;
