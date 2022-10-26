import axios from "axios";

async function deleteProduct(id) {
  const response = axios.delete(`https://fakestoreapi.com/products/${id}`);

  return response;
}

export { deleteProduct };
