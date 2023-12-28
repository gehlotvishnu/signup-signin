import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterBeforeLogin from "./components/MasterBeforeLogin.jsx";
import "./main.css";
import MasterAfterLogin from "./components/MasterAfterLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterBeforeLogin />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/auth/home",
    element: <MasterAfterLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
