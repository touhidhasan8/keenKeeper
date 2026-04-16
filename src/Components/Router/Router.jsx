import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home";
import Timeline from "../Pages/Timeline";
import Error from "../Error/Error";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            
            },
            {
                path: '/timeline',
                Component: Timeline
            },

        ],
        errorElement: <Error></Error>
    }
])