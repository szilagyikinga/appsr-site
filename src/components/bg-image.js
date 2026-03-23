import React from "react";
import { getSrc } from "gatsby-plugin-image";

const BgImage = ({ image, Tag = "div", className, style, children }) => {
  const imageSrc = getSrc(image);

  return (
    <Tag
      className={className}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

export default BgImage;
