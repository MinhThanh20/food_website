import React from "react";
import Category from "./category/Category";
import Home from "./home/Home";
import Popular from "./popular/Popular";

const Layout = () => {
  return (
    <>
      <Home />
      <Category />
      <Popular />
    </>
  );
};

export default Layout;
