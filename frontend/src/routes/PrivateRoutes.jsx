import { Navigate, Outlet } from "react-router";

function PrivateRoutes() {
  const isLogged = localStorage.getItem("isLogged") === "true";

  return isLogged ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoutes;