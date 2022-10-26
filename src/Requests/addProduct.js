import axios from "axios";

async function addProduct(title, price, description, image, category) {
  const response = await axios.post("https://fakestoreapi.com/products", {
    title: title,
    price: price,
    description: description,
    image: image,
    category: category,
  });
}

export { addProduct };
