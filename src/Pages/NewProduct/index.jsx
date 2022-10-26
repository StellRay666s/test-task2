import React from "react";

import style from "./index.module.scss";
import Input from "../../Components/Input";
import Button from "../../Components/Buttons";

import { addProduct } from "../../Requests/addProduct";
import { useNotification } from "../../Hooks/useNotification";

function NewProduct() {
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");

  const notify = useNotification();

  async function newProduct() {
    try {
      addProduct(title, price, description, image, category);
    } catch (err) {
      notify("Ошибка при добалении товара");
    }
  }

  return (
    <>
      <div className={style.wrapper_item}>
        <Input
          placeholder={"Название"}
          type={"text"}
          value={title}
          setValue={setTitle}
        />
        <Input
          type={"text"}
          value={image}
          placeholder={"Картинка"}
          setValue={setImage}
        />
        <Input
          placeholder={"Цена"}
          type={"text"}
          value={price}
          setValue={setPrice}
        />{" "}
        <Input
          placeholder={"Категория"}
          type={"text"}
          value={category}
          setValue={setCategory}
        />
        <Input
          placeholder={"Описание"}
          type={"text"}
          setValue={setDescription}
          value={description}
        />
        <Button onClick={() => newProduct()}>Добавить</Button>
      </div>
    </>
  );
}

export default NewProduct;
