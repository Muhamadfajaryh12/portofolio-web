import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ setState, state, children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="max-w-7xl mx-auto ">
        <Navbar setState={setState} state={state} />
        <div className="w-full flex items-center ">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
