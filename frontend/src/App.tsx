import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "@/page/auth/Auth";
import NotFound from "@/page/404/NotFound";
import Home from "@/page/home/Home";

function App() {
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="min-w-[600px]">
        <Routes key={location.pathname} location={location}>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
