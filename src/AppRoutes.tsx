import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed";
import Pending from "./pages/Pending";
import InProgress from "./pages/InProgress";
import Deferred from "./pages/Deferred";
import AddTask from "./pages/AddTask";
import TaskStats from "./pages/TaskStats";
import Sidebar from "./components/Sidebar";

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/in-progress" element={<InProgress />} />
            <Route path="/deferred" element={<Deferred />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/task-stats" element={<TaskStats />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
