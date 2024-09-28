import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Auth from "@/page/auth/Auth";
import Home from "@/page/home/Home";
import NotFound from "@/page/404/NotFound";

const getAccessToken = () => {
  return localStorage.getItem("token");
};

const isAuthenticated = () => {
  return !!getAccessToken();
};

const router = createBrowserRouter([
  {
    path: "auth",
    element: <Auth />,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
