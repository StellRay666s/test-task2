import React from "react";
import { getProducts } from "../Requests/getProducts";

function useFetchProducts() {
  const [products, setProducts] = React.useState([]);
  console.log(products);

  React.useEffect(() => {
    (async function fetchProduct() {
      const response = await getProducts();
      setProducts(response.data);
    })();
  }, []);

  return { products };
}

export { useFetchProducts };
