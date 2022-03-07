
const loadCartProduct = () => {
    document.getElementById('products_list').textContent = '';
    const cart = checkAndGetCart();
    for(const product in cart){
        displayProduct(product, cart[product]);
    }
}

const addToCart = () => {
    const product_name_field = document.getElementById('product_name');
    const product_name = product_name_field.value;
    if(!product_name){
        alert("Please enter a product name!!!");
        return;
    }
    product_name_field.value = '';
    addProductIntoCartAndSetInLocalStorage(product_name);
    loadCartProduct();
};

const parent = document.getElementById('products_list');
const displayProduct = (product_name, count=1) => {
    const child = document.createElement('li');
    child.innerText = `${product_name}(${count})`;
    parent.appendChild(child);
};

const checkAndGetCart = () => {
    const getCartFromLocalStorage = localStorage.getItem('cart');
    let cart;
    if(getCartFromLocalStorage){
        cart = JSON.parse(getCartFromLocalStorage);
    }else{
        cart = {};
    }
    return cart;
};

const addProductIntoCartAndSetInLocalStorage = (product_name) => {
    const cart = checkAndGetCart();
    if(cart[product_name]){
        cart[product_name] += 1;
    }else{
        cart[product_name] = 1;
    }
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyCart);
}

loadCartProduct();


const placeOrder = () => {
    localStorage.removeItem('cart');
    loadCartProduct();
}
