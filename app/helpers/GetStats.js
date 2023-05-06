/**
 * The function calculates and returns statistics for a list of products stored in local storage.
 * @returns The function `GetStats` returns an object with three properties: `totalCards`,
 * `totalItems`, and `total`. These properties contain the total number of products, the total number
 * of items, and the total price of all the products, respectively.
 */
export const GetStats = () => {
    const products = JSON.parse(localStorage.getItem("myData"));
    const totalCards = products.length;
    let totalItems = 0;
    let total = 0;

    products.forEach(product => {
       let amount = parseInt(product.amount);
       let price = parseInt(product.price);
       totalItems+= amount;
       total += price; 
    });

    const results = {
        totalCards: totalCards,
        totalItems: totalItems,
        total: total,
    }

    return results
}