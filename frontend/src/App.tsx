import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "@/page/auth/Auth";
import NotFound from "@/page/404/NotFound";
// import Login from "@/page/auth/components/Login";

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <Routes key={location.pathname} location={location}>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Auth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
