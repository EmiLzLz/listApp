export function deleteProduct() {
  const btnDelete = document.querySelectorAll(".btn-delete");

  /* This code is adding a click event listener to each button with the class "btn-delete". When a
  button is clicked, it retrieves the name, amount, and price of the corresponding product from the
  DOM. It then prompts the user to confirm if they want to delete the product. If the user confirms,
  it removes the product data from local storage and removes the product from the DOM. */
  btnDelete.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Get item name and price from the DOM
      const productName = e.target.parentElement.querySelector(".product-name");
      const productAmount =
        e.target.parentElement.querySelector(".product-amount");
      const productPrice =
        e.target.parentElement.querySelector(".product-price");

      let isDelete = confirm("¿Seguro que deseas eliminar este producto de la lista?");

      if (isDelete) {

        //Remove data from localStorage
        const items = JSON.parse(localStorage.getItem("myData"));

        const currentItems = items.filter(
          (item) =>
            item.product != productName.textContent &&
            item.amount != productAmount.textContent &&
            item.price != productPrice.textContent
        );

        localStorage.setItem("myData", JSON.stringify(currentItems));
        console.log(currentItems);

        // Remove item from the DOM
        e.target.parentElement.remove();
      }
    });
  });
}
