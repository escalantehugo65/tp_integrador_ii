import { Navigate, Outlet } from "react-router";

function PublicRoutes() {
  const isLogged = localStorage.getItem("isLogged") === "true";

  return isLogged ? <Navigate to="/" replace /> : <Outlet />;
}

export default PublicRoutes;