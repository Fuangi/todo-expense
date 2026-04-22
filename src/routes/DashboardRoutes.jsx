import { Route, Routes } from "react-router-dom";
import Dashboard from "../features/Dashboard";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default DashboardRoutes;
