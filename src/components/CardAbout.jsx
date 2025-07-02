import React from "react";
import { motion } from "framer-motion";
import { withClick } from "../utils/WithClick";

const CyberCard = ({ variant, style }) => {
  const imgSrc =
    variant === "Front" ? "/image/fajar.png" : "/image/back_card.png";

  return (
    <img
      src={imgSrc}
      alt={variant}
      style={{
        ...style,
        objectFit: "cover",
        width: "100%",
        height: "100%",
        borderRadius: "16px",
      }}
    />
  );
};

const CyberpunkFlipCard = withClick(CyberCard);
export default CyberpunkFlipCard;
