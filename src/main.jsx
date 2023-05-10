import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header";
import Teas from "./components/Teas/Teas";
import AddTea from "./components/AddTea/AddTea";
import UpdateTea from "./components/UpdateTea/UpdateTea";
import Syrups from "./components/Syrups/Syrups";
import AddSyrup from "./components/AddSyrup/AddSyrup";
import UpdateSyrup from "./components/UpdateSyrup/UpdateSyrup";
import Milks from "./components/Milks/Milks";
import AddMilk from "./components/AddMilk/AddMilk";
import UpdateMilk from "./components/UpdateMilk/UpdateMilk";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/teas",
                element: <Teas></Teas>,
                loader: () => fetch("http://localhost:5000/teas"),
            },
            {
                path: "/addTea",
                element: <AddTea></AddTea>,
            },
            {
                path: "/teas/update/:id",
                element: <UpdateTea></UpdateTea>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/teas/${params.id}`),
            },
            {
                path: "/syrups",
                element: <Syrups></Syrups>,
                loader: () => fetch("http://localhost:5000/syrups"),
            },
            {
                path: "/addSyrup",
                element: <AddSyrup></AddSyrup>,
            },
            {
                path: "/syrups/update/:id",
                element: <UpdateSyrup></UpdateSyrup>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/syrups/${params.id}`),
            },
            {
                path: "/milks",
                element: <Milks></Milks>,
                loader: () => fetch("http://localhost:5000/milks"),
            },
            {
                path: "/addMilk",
                element: <AddMilk></AddMilk>,
            },
            {
                path: "/milks/update/:id",
                element: <UpdateMilk></UpdateMilk>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/milks/${params.id}`),
            },
        ],
    },
    {
        path: "*",
        element: (
            <>
                <Header></Header>
                <div className="flex flex-col justify-center items-center h-[100vh] gap-4">
                    <h1 className="text-8xl font-semibold">404</h1>
                    <Link to="/" className="text-blue-500 underline">
                        Go Home
                    </Link>
                </div>
            </>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
