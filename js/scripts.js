// VARIÁVEIS CABEÇALHO
const home = document.querySelector("#home");
const palestras = document.querySelector("#palestras");
const sobreNos = document.querySelector("#sobre-nos");
const contatos = document.querySelector("#contatos");
const logotipo = document.querySelector("#logotipo");

// BOTÃO
const inscrevaSe = document.querySelector("#inscreva-se");

// EVENTOS DE CLICK
home.addEventListener("click", () => {
  window.location.href = "index.html";
});

logotipo.addEventListener("click", () => {
  window.location.href = "index.html";
});

palestras.addEventListener("click", ()=> {
  window.location.href = "manutencao.html";
});

sobreNos.addEventListener("click", ()=> {
  window.location.href = "manutencao.html";
});

contatos.addEventListener("click", ()=> {
  window.location.href = "manutencao.html";
});

inscrevaSe.addEventListener("click", ()=> {
  window.location.href = "inscreva-se.html";
})