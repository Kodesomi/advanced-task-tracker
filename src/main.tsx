import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRoutes from "./AppRoutes"; // your routes file

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes /> {/* This file should contain BrowserRouter */}
    </Provider>
  </React.StrictMode>
);
