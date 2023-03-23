const cadastro = document.getElementById("popup")
const principal = document.querySelector(".principal")
const popup = document.getElementById("abrir-popup")


function abrirCadastro(){
    popup.classList.add("remover")
    principal.classList.add("remover")
    cadastro.classList.add("popup")
}

function fecharCadastro(){
    popup.classList.remove("remover")
    cadastro.classList.remove("popup")
    principal.classList.remove("remover")
}