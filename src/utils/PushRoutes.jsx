import { Navigate, Outlet } from "react-router-dom";

const PushRoutes = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return !userData ? <Outlet /> : <Navigate to="/" />;
};

export default PushRoutes;
