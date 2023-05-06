import { GetStats } from "../helpers/GetStats.js";
import { deleteProduct } from "../helpers/delete.js";
import { getInfo } from "../helpers/getInfo.js";
import { productStatus } from "../helpers/productStatus.js";
import { ProductCard } from "./ProductCard.js";
import { Statistics } from "./Statistics.js";
import { UserInput } from "./UserInput.js";

export const Router = () => {
  let { hash } = location;
  const $main = document.getElementById("main");

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    $main.appendChild(UserInput());

    const $data = document.getElementById("add-product");

    getInfo($data);
  } 
  else if (hash === "#/list") {
    const products = JSON.parse(localStorage.getItem("myData"));
    let productContainer = document.createElement("div");
    productContainer.classList.add("products-container");

    products.forEach((item) => (productContainer.innerHTML += (ProductCard(item))));
    $main.appendChild(productContainer);

    deleteProduct();
    productStatus();
  }
  else if (hash === "#/statistics") {
    $main.innerHTML = Statistics(GetStats());
  }
};
