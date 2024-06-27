
import  Homepage from '../pages/Homepage.jsx'

export const routerList = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/friend/:id",
        element: <div>Hello world</div>
    },
    {
        path: "/profile",
        element: <div>Hello world</div>
    },
    {
        path: "/notification",
        element: <div>Hello world</div>
    },
    {
        path: "/message/:id",
        element: <div>Hello world</div>
    },
    {
        path: "/setting",
        element: <div>Hello world</div>
    },
    {
        path: "/post/:id",
        element: <div>Hello world</div>
    }
]
