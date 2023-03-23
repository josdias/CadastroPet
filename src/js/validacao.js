function validarFormulario() {
  var requeridos = document.querySelectorAll("[required]");
  var formularioValido = true;

  for (var i = 0; i < requeridos.length; i++) {
    if (!requeridos[i].value) {
      formularioValido = false;
      break;
    }
  }
  var btnEnviar = document.querySelector("#btnCadastrar");
  btnEnviar.disabled = !formularioValido;
}
