import axios from "axios";

async function login(username, password) {
  const response = await axios.post("https://fakestoreapi.com/auth/login", {
    username: username,
    password: password,
  });
  console.log(response);
  return response;
}

export { login };
