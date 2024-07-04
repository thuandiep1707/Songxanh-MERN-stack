
import  Homepage from '../pages/Homepage.jsx'

const routerList = [
    {
        path: "/",
        element: Homepage
    },
    {
        path: "/friend/:id",
        element: null
    },
    {
        path: "/profile",
        element: null
    },
    {
        path: "/notification",
        element: null
    },
    {
        path: "/message/:id",
        element: null
    },
    {
        path: "/setting",
        element: null
    },
    {
        path: "/post/:id",
        element: null
    }
]

export { routerList }