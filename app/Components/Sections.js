export const Sections = () => {
    const $sections = document.createElement("nav");

    $sections.id = "sections"
    $sections.innerHTML = `
    <a href="#/">Anotar</a>
    <a href="#/list">Mi lista</a>
    <a href="#/statistics">Informe</a>
    `;

    return $sections;
}