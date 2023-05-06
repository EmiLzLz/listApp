export const ProductCard = (props) => {
  let { product, amount, price } = props;

  return `
    <div class="product-card">
        <div class="info-product-container">
            <h2 class="product-name">${product}</h2>
            <div class="info">
                <div class="info-amount">
                    <p><b>Cantidad/Piezas:</b></p><p class="product-amount">&ensp;<b>${amount}</b></p>
                </div>
                <div class="info-price">
                    <p><b>Precio:</b></p><p class="product-price">&ensp;<b>${price}</b></p>
                </div>
            </div>
            <div class = "actions">
                <p><b>Estado de la compra</b></p>
                <label class="content-input">
                    <input type="radio" name= ${product} value="comprado">
                    <b>Comprado</b>
                    <span></span>
                </label>
                <label class="content-input">
                    <input type="radio" name= ${product} value="falta">
                    <b>Falta</b>
                    <span></span>
                </label>
                <label class="content-input">
                    <input type="radio" name= ${product} value="no disponible">
                    <b>No disponible</b>
                    <span></span>
                </label>
            </div>
        </div>
        <button class="btn-delete">Eliminar</button>
    </div>  
    `;
};
