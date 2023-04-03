import Error from "../Pages/Error/Error";
import Quizs from "../Pages/Home/Quizs/Quizs";
import Statistics from "../Pages/Statistics/Statistics";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../Layout/Root");
const { default: Blog } = require("../Pages/Blog/Blog");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: Quiz } = require("../Pages/Home/Quiz/Quiz");


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch("https://openapi.programming-hero.com/api/quiz")
                }

            },

            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: async () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }
            },
            {
                path: "/quiz",
                element: <Quiz></Quiz>
            },
            {
                path: '/quizs/:quizId',
                element: <Quizs></Quizs>,
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                }
            }

        ]
    }
])