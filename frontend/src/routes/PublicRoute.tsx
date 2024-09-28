// // PublicRoute.tsx
// import React from "react";
// import { Route, Navigate, RouteProps } from "react-router-dom";
// import { useAuth } from "@/routes/AuthContext";

// interface PublicRouteProps extends RouteProps {
//   component: React.ComponentType<any>;
// }

// const PublicRoute: React.FC<PublicRouteProps> = ({
//   component: Component,
//   ...rest
// }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/" /> // Redirect to a safe route for authenticated users
//         )
//       }
//     />
//   );
// };

// export default PublicRoute;
