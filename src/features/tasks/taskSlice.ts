// src/features/tasks/taskSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Task status and priority types
export type TaskStatus = "pending" | "in-progress" | "completed" | "deployed" | "deferred";
export type TaskPriority = "low" | "medium" | "high";

// Task interface
export interface Task {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: TaskStatus;
  priority: TaskPriority;
}

// State interface
interface TaskState {
  tasks: Task[];
}

// Initial state
const initialState: TaskState = {
  tasks: [],
};

// Slice
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

// Export actions
export const { addTask, updateTask, deleteTask } = taskSlice.actions;

// Export reducer
export default taskSlice.reducer;
