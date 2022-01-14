import React from "react";
import "./icon.css";

const Icon = ({ img }) => {
  return (
    <>
      <img src={img} width={"25px"} height={"25px"} className={`icon_space`} />
    </>
  );
};

export default Icon;
