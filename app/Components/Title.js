export const Title = () => {
    const $container = document.createElement("div"),
    $image = document.createElement("img"),
    $title = document.createElement("h1");

    $container.id = "title";
    $image.src = "/app/Assets/carro.png";
    $image.alt = "logo";
    $title.innerText = "LISTA DE COMPRAS";

    $container.appendChild($image);
    $container.appendChild($title);

    return $container;
}