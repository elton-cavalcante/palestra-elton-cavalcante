document.addEventListener("DOMContentLoaded", function () {
    const dadosJSON = localStorage.getItem("pegaDados");
  
    if (dadosJSON) {
      // CONVERTENDO A STRING DE VOLTA PARA OBJETO
      const dadosFormulario = JSON.parse(dadosJSON);
  
      // EXIBINDO OS DADOS NA PÁGINA
      const exibeNome = document.querySelector("#nome");
      const exibeCPF = document.querySelector("#cpf");
      const exibeEmail = document.querySelector("#email");
  
      exibeNome.textContent = "Nome: " + dadosFormulario.nomeCompleto;
      exibeCPF.textContent = "CPF: " + dadosFormulario.cpf;
      exibeEmail.textContent = "E-mail: " + dadosFormulario.email;
    }
  });
  