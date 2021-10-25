const cart = [];

function addToCart() {
    let prodotto = parseInt(prompt("add to cart\n1. mele\n2. pere\n3. banane\n4. fragole"));
    if (prodotto in cart) {
        alert("già nel carello")
    } 
    else if (prodotto >= 5) {
        alert("prodotto non disponibile")
    } 
    else if (!prodotto) {
        alert("inserisci un prodotto")
    }
    else {
        cart.push(prodotto);
        console.log(cart);
    };
}


