// import React from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Auth from "@/page/auth/Auth";
// import NotFound from "@/page/404/NotFound";
// import Home from "@/page/home/Home";

// function App() {
//   const location = useLocation();

//   return (
//     <React.Fragment>
//       <Routes key={location.pathname} location={location}>
//         <Route path="/auth" element={<Auth />} />
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </React.Fragment>
//   );
// }

// export default App;

import router from "@/routes/Routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
