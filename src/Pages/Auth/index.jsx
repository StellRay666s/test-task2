import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/slice/userSlice";

import Button from "../../Components/Buttons";
import Input from "../../Components/Input";
import { login } from "../../Requests/login";

import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../Hooks/useNotification";

function Auth() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const notific = useNotification();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function autentication() {
    try {
      const response = await login(username, password);
      const token = response.data.token;
      window.localStorage.setItem("token", token);
      dispatch(setUser(token));
      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      notific("Ошибка при авторизации");
    }
  }

  return (
    <div className={style.auth_wrapper}>
      <h1>Авторизация</h1>
      <Input
        placeholder={"Имя"}
        type={"text"}
        value={username}
        setValue={(e) => setUserName(e)}
      />
      <Input
        placeholder={"Пароль"}
        type={"password"}
        value={password}
        setValue={(e) => setPassword(e)}
      />
      <Button onClick={() => autentication()}>Войти</Button>
    </div>
  );
}

export default Auth;
