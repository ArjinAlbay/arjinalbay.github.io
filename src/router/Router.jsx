import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ResumePage from "../pages/ResumePage";
import BlogPage from "../pages/BlogPage";
import Navbar from "../components/Navbar/Navbar";
import "./Router.module.css";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="blog" element={<BlogPage />} />
        </Routes>
      </div>
    </>
  );
};
export default AppRouter;
