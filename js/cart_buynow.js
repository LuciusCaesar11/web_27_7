// Cart
let cartIcon = document.querySelector('.cart')
let cart = document.querySelector('.cart_zone')
let closeCart = document.querySelector('#close-cart')
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add('active');
}
//Close Cart
closeCart.onclick = () => {
    cart.classList.remove('active');
}

