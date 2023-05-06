export const Statistics = (props) => {
    let { totalCards, totalItems, total } = props;

    return `
    <div class="statistics">
        <div class="statistics-container">
            <div class="total-cards">
                <h3>Total de notas: </h3>
                <p>${totalCards}</p>
            </div>
            <div class="total-items">
                <h3>Total de productos:</h3>
                <p>${totalItems}</p>
            </div>
            <div class="total">
                <h3>Gasto Total: </h3>
                <p>$${total}</p>
            </div>
        </div>
        <img src="app/assets/statistics.png" alt="statistics">
    </div>
    `
}