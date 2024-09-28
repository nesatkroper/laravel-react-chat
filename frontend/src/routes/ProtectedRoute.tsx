import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ isAuthenticated }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
