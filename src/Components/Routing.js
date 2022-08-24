import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import CoustomersReview from "./CoustomersReview";
import Home from "./Home";
import "./App.css";
import ErrorPage from "./ErrorPage";
import Companypage from "./Companypage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Testimonial" element={<CoustomersReview />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/company" element={<Companypage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
