let cart = [];
let total = 0;

function toggleCart() {
    const cart = document.getElementById('cartOffcanvas');
    cart.classList.toggle('open');
}

function addToCart(productId, productName, productPrice, quantity) {
    const product = { id: productId, name: productName, price: productPrice, quantity };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);
        
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}