import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Orders from "../Components/Orders/Orders";
import Profile from "../Components/profile/Profile";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/orders',
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            }
        ]
    }
])