import axios from "axios";
import React from "react";
import style from "./index.module.scss";

function Input({ value, setValue, placeholder, type }) {
  return (
    <>
      <input
        className={style.input}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default Input;
