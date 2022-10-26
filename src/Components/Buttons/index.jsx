import React from "react";
import style from "./index.module.scss";

function Button({ onClick, children }) {
  return (
    <>
      <button onClick={() => onClick()}>{children}</button>
    </>
  );
}

export default Button;
