const cadastro = document.getElementById("popup")
const login = document.getElementById("login")
const popup = document.getElementById("abrir-popup")

function abrirCadastro(){
    popup.classList.add("remover")
    login.classList.add("remover")
    cadastro.classList.add("popup")
}

function fecharCadastro(){
    popup.classList.remove("remover")
    login.classList.remove("remover")
    cadastro.classList.remove("popup")
}