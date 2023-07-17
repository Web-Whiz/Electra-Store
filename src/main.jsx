import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProviders from "./Providers/AuthProviders";
import { ReactNotifications } from "react-notifications-component";
import "animate.css/animate.min.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <ReactNotifications />
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>
);
