import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./AppRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
