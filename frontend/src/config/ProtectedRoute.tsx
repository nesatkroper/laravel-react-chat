// ProtectedRoute.tsx
import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "@/config/AuthContext ";

interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/auth" />
      }
    />
  );
};

export default ProtectedRoute;
