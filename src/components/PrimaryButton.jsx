import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <button className="bg-stone-800 text-white font-semibold text-sm p-3 rounded-md">
      {text}
    </button>
  );
};

export default PrimaryButton;
