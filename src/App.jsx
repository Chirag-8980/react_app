import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./componets/pages/About";
import Home from "./componets/pages/Home";
import Login from "./componets/pages/Login";
import Registration from "./componets/pages/Registration";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
