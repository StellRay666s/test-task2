import axios from "axios";

async function getProduct(id) {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

  return response;
}

export { getProduct };
