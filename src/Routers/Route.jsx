import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/LogIn&SignUp/SignIn";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path: "/",
            element: <Home /> 
        },
      {
        path: "/login",
        element: <SignIn/>
      },
      ]
    },
  ]);


  export default router;