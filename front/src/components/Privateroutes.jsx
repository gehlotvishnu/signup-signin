import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("vkg");
  console.log(token);
  if (token) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

const Privateroutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroutes;
