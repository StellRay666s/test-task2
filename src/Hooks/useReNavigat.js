import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function useReNavigate() {
  const navigate = useNavigate();

  return function checkToken() {
    if (!window.localStorage.getItem("token", "")) {
      navigate("/authorization");
    }
  };
}

export { useReNavigate };
