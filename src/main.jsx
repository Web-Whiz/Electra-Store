import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Route.jsx";
import AuthProviders from "./UserAuthentication/AuthProvider";
import { ReactNotifications } from "react-notifications-component";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode>
      <AuthProviders>
        <ReactNotifications />
        <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
    </React.StrictMode>
  </div>
);
