import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div
      className="scroll-smooth h-screen overflow-y-scroll snap-y snap-mandatory bg-[#080e18f8]"
      id="snap"
    >
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
