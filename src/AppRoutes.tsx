import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Completed from "./pages/Completed";
import Pending from "./pages/Pending";
import InProgress from "./pages/InProgress";
import Deferred from "./pages/Deferred";
import AddTask from "./pages/AddTask";
import TaskStats from "./pages/TaskStats";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/in-progress" element={<InProgress />} />
        <Route path="/deferred" element={<Deferred />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/task-stats" element={<TaskStats />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
