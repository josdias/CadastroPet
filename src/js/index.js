const cadastro = document.getElementById("popup");
const principal = document.querySelector(".principal");
const popup = document.getElementById("abrir-popup");
const limpar = document.getElementById("fechar-popup");

function abrirCadastro() {
  popup.classList.add("remover");
  principal.classList.add("remover");
  cadastro.classList.add("popup");
}

function fecharCadastro() {
  popup.classList.remove("remover");
  cadastro.classList.remove("popup");
  principal.classList.remove("remover");

  var formulario = document.getElementById("formularioCadastro");
  var campos = formulario.getElementsByTagName("input");
  for (var i = 0; i < campos.length; i++) {
    campos[i].value = " ";
  }

  var textarea = formulario.getElementsByTagName("textarea");
  for (var i = 0; i < textarea.length; i++) {
    textarea[i].value = "";
  }
  formulario.reset();
}