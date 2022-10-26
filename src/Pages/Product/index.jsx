import React from "react";
import style from "./index.module.scss";

import Input from "../../Components/Input";

import { useFetchProduct } from "../../Hooks/useFetchProduct";
import { updateProduct } from "../../Requests/updateProduct";
import { deleteProduct } from "../../Requests/deleteProduct";

function Product() {
  const { product } = useFetchProduct();
  const countRating = { ...product.rating };

  const [title, setTitle] = React.useState();
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    setTitle(product.title);
    setPrice(product.price);
    setImage(product.image);
    setDescription(product.description);
    setCategory(product.category);
  }, [product]);

  async function deleteProd() {
    if (window.confirm("Вы уверены что хотите удалить товар?")) {
      const response = await deleteProduct(product.id);
    }
  }

  return (
    <>
      <div className={style.wrapper_item}>
        <div className={style.title_image}>
          <img src={image} />
          <h3>URL:</h3>
          <Input value={image} setValue={(e) => setImage(e)} />
          <button
            onClick={() =>
              updateProduct(
                product.id,
                title,
                price,
                description,
                image,
                category
              )
            }
            className={style.save_changes_btn}
          >
            Сохранить изменения
          </button>
          <button onClick={() => deleteProd()} className={style.delete_btn}>
            Удалить продукт
          </button>
        </div>
        <div className={style.prod_info}>
          <div className={style.product_price}>
            <h3>Название:</h3>
            <Input value={title} setValue={(e) => setTitle(e)} />
            <h3>Цена:</h3>{" "}
            <Input value={price} setValue={(e) => setPrice(e)} type={"text"} />{" "}
          </div>{" "}
          <div className={style.prod_category}>
            <h3>Категория:</h3>
            <Input
              setValue={(e) => setCategory(e)}
              value={category}
              type={"text"}
            />
          </div>
          <div className={style.prod_rating_count}>
            <h3>
              Количество: <Input value={countRating.count} type={"text"} />
            </h3>
          </div>
          <div className={style.prod_rating_rate}>
            <h3> Рейтинг:</h3> <Input value={countRating.rate} type={"text"} />
          </div>
          <div className={style.prod_description}>
            <h3> Описание:</h3>
            <textarea
              className={style.field_description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
