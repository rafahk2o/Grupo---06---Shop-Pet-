// let campoDados = document.querySelector(".campo-dados-compras");
let cartaoRadio = document.querySelector(".cartao-pagamento-compras");
let pixRadio = document.querySelector(".pix-pagamento-compras");
let boletoRadio = document.querySelector(".boleto-pagamento-compras");
let cartaoDados = document.querySelector(".campo-dados-compras");
let pixDados = document.querySelector(".campo-dados-pix-compras");
let boletoDados = document.querySelector(".campo-dados-boleto-imprimir");
let cardPag = document.querySelector("#card-pag");
let pixPag = document.querySelector("#pix-pag");
let boletoPag = document.querySelector("#boleto-pag");

cartaoRadio.addEventListener("click", () => {
  cartaoDados.style.display = "flex";
  pixDados.style.display = "none";
  boletoDados.style.display = "none";
  cardPag.checked = true;
  pixPag.checked = false;
  boletoPag.checked = false;
});

pixRadio.addEventListener("click", () => {
  cartaoDados.style.display = "none";
  pixDados.style.display = "flex";
  boletoDados.style.display = "none";
  cardPag.checked = false;
  pixPag.checked = true;
  boletoPag.checked = false;
});

boletoRadio.addEventListener("click", () => {
  cartaoDados.style.display = "none";
  pixDados.style.display = "none";
  boletoDados.style.display = "flex";
  boletoPag.checked = true;
  cardPag.checked = false;
  pixPag.checked = false;
});
