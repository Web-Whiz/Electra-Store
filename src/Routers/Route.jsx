import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/LogIn&SignUp/SignIn";
import Dashboard from "../Layouts/Dashboard";
import MyAccount from "../Pages/Dashboard/MyAccount";
import Cart from "../Pages/Dashboard/Cart";
import PrivateRoute from "./PrivateRoute";

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
        element: <SignIn />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <MyAccount />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);


export default router;
