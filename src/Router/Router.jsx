import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import SignIn from "../Pages/Login/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignIn/>
      },
      {
        path: "/register",
        element: <Register/>
      },
    ],
  },
]);

export default router;
