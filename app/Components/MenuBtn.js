export const MenuBtn = () => {
    const $menuMobile = document.createElement("button");

    $menuMobile.id = "mobile";
    $menuMobile.innerText ="menu"

    $menuMobile.addEventListener("click", () => {
        const sections = document.getElementById("sections");

        sections.classList.toggle("show")
    })

    return $menuMobile;
}