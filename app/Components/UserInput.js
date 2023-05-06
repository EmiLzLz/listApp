export const UserInput = () => {
    const d = document,
     $form = d.createElement("form"),
     $txtProduct = d.createElement("label"),
     $product = d.createElement("input"),
     $txtAmount = d.createElement("label"),
     $amount = d.createElement("input"),
     $txtPrice = d.createElement("label"),
     $price = d.createElement("input"),
     $submit = d.createElement("div"),
     $button = d.createElement("button");

    $form.id = "add-product";
    $product.id = "product";
    $amount.id = "amount";
    $price.id = "price";

    $product.name = "product";
    $amount.name = "amount";
    $price.name = "price";

    $product.type="text";
    $amount.type="number";
    $price.type="number";
    $button.type="submit";

    $product.placeholder="Producto nuevo...";
    $amount.placeholder="Cantidad...";
    $price.placeholder="Costo...";

    $txtProduct.innerText = "Producto a comprar: ";
    $txtAmount.innerText = "Cantidad/Piezas: ";
    $txtPrice.innerText = "Costo: ";
    $button.innerText = "Agregar";

    $submit.appendChild($button);
    $form.appendChild($txtProduct);
    $form.appendChild($product);
    $form.appendChild($txtAmount);
    $form.appendChild($amount);
    $form.appendChild($txtPrice);
    $form.appendChild($price);
    $form.appendChild($submit);

    return $form;
}