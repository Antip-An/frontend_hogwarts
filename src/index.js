import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Page from "./pages/Page";
import LoginPage from "./pages/Login";
import RegistrPage from "./pages/Registr";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registr" element={<RegistrPage />} />
          <Route path="/courses" element={<div>Courses</div>} />
          <Route path="/myCourses" element={<div>MyCourses</div>} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
