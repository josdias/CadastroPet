const telefone = document.querySelector("#telefone");

telefone.addEventListener("keypress", () => {
  let maximo = telefone.value.length;

  if (maximo === 0) {
    telefone.value += "(";
  }else if (maximo === 3) {
    telefone.value += ")";
  }else if (maximo === 9) {
    telefone.value += "-"
  }
});
