import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home";
import Timeline from "../Pages/Timeline";
import Error from "../Error/Error";
import Loadings from "../Loadings/Loadings";
import Friends from "../Friends/Friends";
import FriendDetails from "../Friends/FriendDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                loader: () => fetch('/data.json'),
                hydrateFallbackElement: <Loadings></Loadings>
            },
            {
                path: '/timeline',
                Component: Timeline
            }, {
                path: 'friendDetails/:id',
                Component: FriendDetails,
                loader:()=>fetch('/data.json'),
                hydrateFallbackElement:<Loadings></Loadings>
            }

        ],
        errorElement: <Error></Error>
    }
])