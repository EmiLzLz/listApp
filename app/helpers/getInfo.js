/**
 * The function adds an event listener to a form element, validates the input, and stores the data in
 * local storage.
 * @param element - The HTML element that the event listener is being added to.
 */
export function getInfo(element) {
  element.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameRegex = /[a-zA-Z]+$/;
    let data = JSON.parse(localStorage.getItem("myData")) || [];

    let product = document.getElementById("product").value;
    let amount = document.getElementById("amount").value;
    let price = document.getElementById("price").value;

    if (!nameRegex.test(product)) {
      return false;
    }

    let newData = { product, amount, price };

    data.push(newData);

    localStorage.setItem("myData", JSON.stringify(data));

    element.reset();
  });
}
