import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

import { useFetchProducts } from "../../Hooks/useFetchProducts";
import ProductCard from "../../Components/ProductCard";

function Home() {
  const { products } = useFetchProducts();

  return (
    <>
      {" "}
      <h1>Продукты</h1>
      <div className={style.link}>
        <Link to={"/newproduct"}>Добавить продукт</Link>
      </div>
      <div className={style.wrapperProduct}>
        {" "}
        {products.map((data) => (
          <ProductCard
            key={data.id}
            title={data.title}
            image={data.image}
            price={data.price}
            id={data.id}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
