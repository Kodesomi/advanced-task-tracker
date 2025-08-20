import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Task, TaskStatus, TaskPriority } from "../features/tasks/taskSlice";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "pending",
    priority: "medium",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) return;

    dispatch(addTask({ ...formData, id: Date.now().toString() } as Task));


    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "pending",
      priority: "medium",
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Task Title" className="w-full p-2 border rounded" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Task Description" className="w-full p-2 border rounded" />
        <div className="flex space-x-2">
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-1/2 p-2 border rounded" />
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-1/2 p-2 border rounded" />
        </div>
        <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="deferred">Deferred</option>
          <option value="deployed">Deployed</option>
        </select>
        <select name="priority" value={formData.priority} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
