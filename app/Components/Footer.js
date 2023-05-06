export const Footer = () => {
    const $footer = document.createElement("footer"),
      $author = document.createElement("h3");

    $author.innerText = "Build by Emiliano Lopez";

    $footer.appendChild($author);

    return $footer;
}