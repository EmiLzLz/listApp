import { Footer } from "./Components/Footer.js";
import { Header } from "./Components/Header.js";
import { Main } from "./Components/Main.js";
import { MenuBtn } from "./Components/MenuBtn.js";
import { Router } from "./Components/Router.js";
import { ScrollBtn } from "./Components/ScrollBtn.js";
import { GoToTop } from "./helpers/GoToTop.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(MenuBtn());
  $root.appendChild(ScrollBtn());
  $root.appendChild(Footer());

  Router();

  window.addEventListener("scroll", () => {
    let userScroll = window.scrollY;
    let scrollButton = document.getElementById("scrollBtn");

    if(userScroll < 300){
      scrollButton.classList.remove("getBack");
    }

    if(userScroll >= 300){
      console.log("APARECE EL BOTON");
      scrollButton.classList.add("getBack");
      scrollButton.addEventListener("click", GoToTop);
    }
  })
}
