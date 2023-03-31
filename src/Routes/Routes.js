const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");
const { default: Blog } = require("../Pages/Blog/Blog");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: Quiz } = require("../Pages/Home/Quiz/Quiz");
const { default: Stats } = require("../Pages/Stats/Stats");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/statistics',
                element: <Stats></Stats>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/quiz",
                element: <Quiz></Quiz>
            }
        ]
    }
])