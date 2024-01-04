import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import {
  createBrowserRouter,
  // redirect,
  RouterProvider,
} from "react-router-dom";

import MasterBeforeLogin from "./components/MasterBeforeLogin.jsx";
import "./main.css";
import MasterAfterLogin from "./components/MasterAfterLogin.jsx";
import Team from "./components/team.jsx";
import Privateroutes from "./components/Privateroutes.jsx";

/*const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
/*
/*
const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};*/
/*
export const PrivateRoute = ({ children }) => {
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};*/

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
    element: <Privateroutes />,
    children: [
      {
        path: "/auth/home",
        element: <MasterAfterLogin />,
      },
      {
        path: "/auth/team",
        element: <Team />,
      },
    ],
  },
  /*
  {
    path: "/auth/hom",
    element: isAuthenticated() ? <MasterAfterLogin /> : <Signin />,
  },*/
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
