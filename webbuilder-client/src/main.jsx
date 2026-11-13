import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/style.css";
import App from "./App.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Builder from "./pages/builder.jsx";
import Preview from "./pages/preview.jsx";
import Pages from "./pages/pages.jsx";

const router = createBrowserRouter([

  
  {
    path: "/app",
    element: <App />,
  },
  
  {
    path: "/builder/:slug",
    element: <Builder />,
  },
  
  {
    path: "/preview",
    element: <Preview />,

  },
  {
    path: "/pages",
    element: <Pages />,

  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);



// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(<RouterProvider router={router} />);