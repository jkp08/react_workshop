import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return userData ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
