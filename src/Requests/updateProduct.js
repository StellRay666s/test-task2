import axios from "axios";

async function updateProduct(id, title, price, description, image, category) {
  const response = await axios.put(`https://fakestoreapi.com/products/${id}`, {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });

  return response;
}

export { updateProduct };
