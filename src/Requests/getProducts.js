import axios from "axios";

async function getProducts() {
  const response = await axios.get(`https://fakestoreapi.com/products`);

  return response;
}

export { getProducts };
