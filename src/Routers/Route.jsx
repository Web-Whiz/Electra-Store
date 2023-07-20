import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/LogIn&SignUp/SignIn";
import LogIn from "../Layouts/LogIn";
import ListAnProduct from "../Components/ListAnProduct/ListAnProduct.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/list-item",
                element: <ListAnProduct />
            }
        ]
    },
    {
        path: '/login',
        element: <LogIn />,
        children: [
            {
                path: '/login',
                element: <SignIn />
            }
        ]
    }
]);


export default router;
