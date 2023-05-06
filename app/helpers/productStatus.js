/**
 * The function changes the background color of a product card based on the selected radio button
 * option.
 */
export const productStatus = () => {
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const options = product.querySelectorAll("input[type='radio']");

    options.forEach((option) => {
        option.addEventListener("change", (e) => {
            const selectedOption = e.target.value;
            const cardBody = e.target.closest(".product-card")

            if(selectedOption === "comprado"){
                cardBody.style.backgroundColor = "rgb(205, 255, 130)";
            }
            else if(selectedOption === "falta"){
                cardBody.style.backgroundColor = "rgb(255, 255, 139)";
            }
            else if(selectedOption === "no disponible"){
                cardBody.style.backgroundColor = "#ff6e6e";
            }
            else{
                cardBody.style.backgroundColor = "white";
            }
        })
    })

  });
};
