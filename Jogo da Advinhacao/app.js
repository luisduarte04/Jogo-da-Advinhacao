

let numeroAleat = numeroAleatorio()
let qntdTentativa = 1




function mostrarNaTela(seletor, texto) {
    let tag = document.querySelector(seletor)
    tag.innerHTML = (texto)
}

function telaInicial() {
    mostrarNaTela("h1", "Jogo da advinhação")
    mostrarNaTela("p", "Chute um número de 1 a 10:")
}
telaInicial()


function verificarChute() {
    let tentativa = qntdTentativa > 1 ? "tentativas" : "tentativa"
    let mensagemTentativa = `Você acertou em ${qntdTentativa} ${tentativa} `
    let chute = document.querySelector("input").value
    if (chute == numeroAleat) {
        mostrarNaTela("h1", "Parabéns!")
        mostrarNaTela(`p`, `${mensagemTentativa}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        limparInput()
        document.getElementById("reiniciar").removeAttribute("disabled")
        if (chute > numeroAleat) {
            mostrarNaTela("p", "O número é menor!")
        } else {
            mostrarNaTela("p", "O número é maior!")
        }
        qntdTentativa += 1
    }
}
function numeroAleatorio() {
    return parseInt(Math.random() * 11)
}



function limparInput() {
    let chute = document.querySelector("input")
    chute.value = ""
}

function reiniciarJogo() {
    numeroAleat = numeroAleatorio()
    qntdTentativa = 1
    telaInicial()
    limparInput()
    document.getElementById("reiniciar").setAttribute("disabled", true)

}
