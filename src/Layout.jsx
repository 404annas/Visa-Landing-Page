import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./SVComponents/svComponents";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
