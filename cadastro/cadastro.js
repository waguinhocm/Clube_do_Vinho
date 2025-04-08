const inputNomeUsuario = document.querySelector("#signUp-usuario");
const inputSenha = document.querySelector("#signUp-senha"); 
const inputEmail = document.querySelector("#signUp-email"); 
const mensagensErro = document.querySelectorAll(".error-text")
const mensagemErroNomeUsuario = mensagensErro[0] 
const mensagemErroEmail = mensagensErro[1] 
const mensagemErroSenha = mensagensErro[2] 

function exibirErroNomeUsuario() {
<<<<<<< HEAD
    inputNomeUsuario.classList.add("error")
    inputNomeUsuario.classList.remove("correct")
=======
>>>>>>> c320b9040315af9e174a160597e0a8f01fb1fbd3
    mensagemErroNomeUsuario.classList.add("visible")
}

function exibirSucessoNomeUsuario() {
<<<<<<< HEAD
    inputNomeUsuario.classList.add("correct")
    inputNomeUsuario.classList.remove("error")
    mensagemErroNomeUsuario.classList.remove("visible")
} 
function exibirErroEmail() {
    inputEmail.classList.add("error")
    inputEmail.classList.remove("correct")
=======
    mensagemErroNomeUsuario.classList.remove("visible")
} 
function exibirErroEmail() {
>>>>>>> c320b9040315af9e174a160597e0a8f01fb1fbd3
    mensagemErroEmail.classList.add("visible")
}

function exibirSucessoEmail() {
<<<<<<< HEAD
    inputEmail.classList.add("correct")
    inputEmail.classList.remove("error")
=======
>>>>>>> c320b9040315af9e174a160597e0a8f01fb1fbd3
    mensagemErroEmail.classList.remove("visible")
} 

function exibirErroSenha() {
<<<<<<< HEAD
    inputSenha.classList.add("error")
    inputSenha.classList.remove("correct")
=======
>>>>>>> c320b9040315af9e174a160597e0a8f01fb1fbd3
    mensagemErroSenha.classList.add("visible")
}

function exibirCorretoSenha() {
<<<<<<< HEAD
    inputSenha.classList.add("correct")
    inputSenha.classList.remove("error")
=======
>>>>>>> c320b9040315af9e174a160597e0a8f01fb1fbd3
    mensagemErroSenha.classList.remove("visible") 
}
inputNomeUsuario.addEventListener("input", (evento) => {
    const valor = evento.target.value
<<<<<<< HEAD
    if (valor.length < 5) {
=======
    const contemNumeros = /[0-9]/.test(valor);
    if(contemNumeros) {
        mensagemErroNomeUsuario.innerText = "seu nome não pode conter números"
        exibirErroNomeUsuario()
    } 
    else if (valor.length === 0) {
        mensagemErroNomeUsuario.innerText = ""
        exibirErroNomeUsuario()
    }
    else if (valor.length < 5) {
>>>>>>> c320b9040315af9e174a160597e0a8f01fb1fbd3
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

<<<<<<< HEAD
    if (valor.length < 8) {
=======
    if (valor.length === 0) {
        mensagemErroSenha.innerText = ""
        exibirErroSenha()
    } 
    else if (valor.length < 8) {
>>>>>>> c320b9040315af9e174a160597e0a8f01fb1fbd3
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