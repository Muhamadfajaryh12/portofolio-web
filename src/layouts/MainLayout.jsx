import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div
      className="scroll-smooth h-screen overflow-y-scroll snap-y snap-mandatory bg-[#000000]"
      id="snap"
    >
      {children}
    </div>
  );
};

export default MainLayout;
