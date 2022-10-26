import React from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Requests/getProduct";

function useFetchProduct() {
  const [product, setProduct] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    (async function fetchProduct() {
      const response = await getProduct(id);
      setProduct(response.data);
    })(id);
  }, [id]);

  return { product };
}

export { useFetchProduct };
