//Barra de pesquisa
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
};

//Carrinho de compra
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

//Formulário do login
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
}

//Banner Rotativo
// let banner = 1;
// setInterval(function () {
//     document.getElementById('radio' + banner).checked = true;
//     banner++;
//     if (banner > 2) {
//         banner = 1;
//     }
// }, 5000);