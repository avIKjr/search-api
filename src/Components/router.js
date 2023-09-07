import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./map";
import MERN from "./MernStack";
import Home from "./home";
import Header from "./Header";
import NotFound from "./NotFound";
import Product from "./product";

const Router1 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" Component={Home} />
        <Route path="/map" Component={Map} />
        <Route path="/mern" Component={MERN} />
        <Route path="/product/:id" Component={Product} />
        <Route path="/*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router1;
