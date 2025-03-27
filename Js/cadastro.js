const inputNomeUsuario = document.querySelector("#signUp-usuario");
const inputSenha = document.querySelector("#signUp-senha"); 
const inputEmail = document.querySelector("#signUp-email"); 
const mensagensErro = document.querySelectorAll(".error-text")
const mensagemErroNomeUsuario = mensagensErro[0] 
const mensagemErroEmail = mensagensErro[1] 
const mensagemErroSenha = mensagensErro[2] 

function exibirErroNomeUsuario() {
    inputNomeUsuario.classList.add("error")
    inputNomeUsuario.classList.remove("correct")
    mensagemErroNomeUsuario.classList.add("visible")
}

function exibirSucessoNomeUsuario() {
    inputNomeUsuario.classList.add("correct")
    inputNomeUsuario.classList.remove("error")
    mensagemErroNomeUsuario.classList.remove("visible")
} 
function exibirErroEmail() {
    inputEmail.classList.add("error")
    inputEmail.classList.remove("correct")
    mensagemErroEmail.classList.add("visible")
}

function exibirSucessoEmail() {
    inputEmail.classList.add("correct")
    inputEmail.classList.remove("error")
    mensagemErroEmail.classList.remove("visible")
} 

function exibirErroSenha() {
    inputSenha.classList.add("error")
    inputSenha.classList.remove("correct")
    mensagemErroSenha.classList.add("visible")
}

function exibirCorretoSenha() {
    inputSenha.classList.add("correct")
    inputSenha.classList.remove("error")
    mensagemErroSenha.classList.remove("visible") 
}
inputNomeUsuario.addEventListener("input", (evento) => {
    const valor = evento.target.value
    if (valor.length < 5) {
        mensagemErroNomeUsuario.innerText = "Mínimo de 5 caracteres"
        exibirErroNomeUsuario()
    } else {
        exibirSucessoNomeUsuario()
    }
})

inputSenha.addEventListener("input", (evento) => {
    const valor = evento.target.value
    const possuiMaiusculo = valor.toLowerCase() !== valor
    const possuiMinuscula = valor.toLowerCase() !== valor

    if (valor.length < 8) {
        mensagemErroSenha.innerText = "Senha muito curta"
        exibirErroSenha()
    } 
    else if (!possuiMaiusculo) {
        mensagemErroSenha.innerText = "Inclua ao menos uma letra maiúscula"
        exibirErroSenha()
    }
    else if (!possuiMinuscula) {
        mensagemErroSenha.innerText = "Inclua ao menos uma letra minuscula"
        exibirErroSenha()
    }
    else {
        exibirCorretoSenha() 
    }
})

inputEmail.addEventListener("input", (event) => {
    const valor = event.target.value
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!regexEmail.test(valor)) {
        mensagemErroEmail.innerText = "Digite um email válido"
        exibirErroEmail();
    } else {
        exibirSucessoEmail();
        mensagemErroEmail.innerText = ''
    }
})