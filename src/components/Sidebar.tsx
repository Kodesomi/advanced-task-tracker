import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/completed", label: "Completed Tasks" },
    { path: "/pending", label: "Pending Tasks" },
    { path: "/inprogress", label: "In Progress" },
    { path: "/deferred", label: "Deferred Tasks" },
    { path: "/add", label: "Add New Task" },
    { path: "/stats", label: "Task Stats" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Task Tracker</h1>
      <nav className="flex flex-col space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition ${
                isActive
                  ? "bg-gray-700 text-yellow-400 font-semibold"
                  : "hover:bg-gray-800"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
