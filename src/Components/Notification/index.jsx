import React from "react";
import style from "./index.module.scss";
import { useSelector } from "react-redux";

function Notification() {
  const { message, isOpen } = useSelector((state) => state.notification.data);

  return (
    <div
      style={{
        position: "fixed",
        right: isOpen ? "250px" : "-260px",
        transitionDuration: "2s",
      }}
    >
      <div className={style.notify}>{message}</div>
    </div>
  );
}

export default Notification;
