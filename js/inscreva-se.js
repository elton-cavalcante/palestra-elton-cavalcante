// VARIÁVEIS CABEÇALHO
const home = document.querySelector("#home");
const palestras = document.querySelector("#palestras");
const sobreNos = document.querySelector("#sobre-nos");
const contatos = document.querySelector("#contatos");
const logotipo = document.querySelector("#logotipo");

// FORMULÁRIO
const form = document.querySelector("form");
const nomeCompleto = document.querySelector("#nome-completo");
const cpf = document.querySelector("#cpf");
const email = document.querySelector("#email");
const aceitaTermos = document.querySelector("#aceita-termos");

// BOTÃO
const inscrevaSe = document.querySelector("#inscreva-se");

// EVENTOS DE CLICK
home.addEventListener("click", () => {
  window.location.href = "index.html";
});

logotipo.addEventListener("click", () => {
  window.location.href = "index.html";
});

palestras.addEventListener("click", () => {
  window.location.href = "manutencao.html";
});

sobreNos.addEventListener("click", () => {
  window.location.href = "manutencao.html";
});

contatos.addEventListener("click", () => {
  window.location.href = "manutencao.html";
});

// VALIDAÇÃO DE FORMULÁRIO
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nomeCompleto.value === "") {
    alert("Preencha seu nome completo");
    return;
  }

  if (cpf.value === "") {
    alert("Preencha seu CPF!");
    return;
  }

  if (email.value === "") {
    alert("Preencha seu e-mail!");
    return;
  }

  if (aceitaTermos.checked == false) {
    alert("Por favor, aceite os termos de uso.");
    return;
  }

  // OBJETO COM OS DADOS CADASTRADOS
  const pegaDados = {
    nomeCompleto: nomeCompleto.value,
    cpf: cpf.value,
    email: email.value,
  };

  // CONVERSÃO DE OBJETO PARA STRING JSON
  const dadosJSON = JSON.stringify(pegaDados);

  // ARMAZENAMENTO DOS DADOS PARA O LOCALSTORAGE
  localStorage.setItem("pegaDados", dadosJSON);

  // REDIRECIONAMENTO PARA A PRÓXIMA PÁGINA
  window.location.href = "listagem.html";
});
