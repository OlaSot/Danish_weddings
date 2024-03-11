import React from "react";
import s from "./s.module.css";

const Line = ({ width = 100 }) => {
  const lineStyle = {
    width: `${width}%`,
  };

  return (
    <div className={s.lineContainer}>
      <div className={s.line} style={lineStyle} />
    </div>
  );
};

export default Line;
