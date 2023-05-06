import { Sections } from "./Sections.js";
import { Title } from "./Title.js";

export const Header = () => {
    const $header = document.createElement("header");

    $header.id = "menu";

    $header.appendChild(Title());
    $header.appendChild(Sections());

    return $header;
}