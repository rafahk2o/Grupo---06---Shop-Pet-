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

// fim conteúdo central cards azuis
let btn1 = document.querySelector("#btn-content-vet1-btn");
let btn2 = document.querySelector("#btn-content-vet2-btn");
let btn3 = document.querySelector("#btn-content-vet3-btn");
let cardRight = document.querySelector(".content-right-vet");
let contentText1 = document.querySelector(".btn-content-content1");
let contentText2 = document.querySelector(".btn-content-content2");
let contentText3 = document.querySelector(".btn-content-content3");


btn1.addEventListener("click", () => {
    event.preventDefault();
    cardRight.style.background = "#8DD9E9";
    contentText1.style.display = "flex";
    contentText2.style.display = "none";
    contentText3.style.display = "none";
    
    
});

btn2.addEventListener("click", () => {
    event.preventDefault();
    cardRight.style.background = "#479BAC";
    contentText1.style.display = "none";
    contentText2.style.display = "flex";
    contentText3.style.display = "none";
    
});

btn3.addEventListener("click", () => {
    event.preventDefault();
    cardRight.style.background = "#11778B";
    contentText1.style.display = "none";
    contentText2.style.display = "none";
    contentText3.style.display = "flex";
    
    
});

// fim conteúdo central cards azuis




