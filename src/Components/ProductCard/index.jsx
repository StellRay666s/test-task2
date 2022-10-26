import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

function ProductCard({ image, price, title, id }) {
  return (
    <div className={style.wrapper_card}>
      <img src={image} />
      <h3 className={style.title}>{title}</h3>
      <div className={style.title}>Цена: {price}</div>
      <Link to={`/product/${id}`}> Посмотреть продукт</Link>
    </div>
  );
}

export default ProductCard;
