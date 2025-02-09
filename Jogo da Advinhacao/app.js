let numero = gerarNumero()
let tentativa = 1

function telaInicial(seletor, texto) {
    let mensagem = document.querySelector(seletor)
    mensagem.innerHTML = texto

}
function mensagemPadrao() {
    telaInicial("h1", "Jogo da advinhação")
    telaInicial("p", "Chute um número de 1 a 10: ")
}
mensagemPadrao()

function gerarNumero() {
    return parseInt(Math.random() * 11)
}

function verificarChute() {
    let chute = document.querySelector("input").value
    let mensagemTentativa = tentativa == 1 ? "tentativa" : "tentativas"
    if (chute == numero) {
        telaInicial("p", `Parabéns, você acertou em ${tentativa} ${mensagemTentativa}`)
        limparInput()
    } else {
        document.getElementById("reiniciar").removeAttribute("disabled")
        tentativa += 1
        limparInput()
        if (chute > numero) {
            telaInicial("p", "O número é menor")
        } else {
            telaInicial("p", "O número é maior")
        }
    }
}


function limparInput() {
    document.querySelector("input").value = ""

}

function reiniciarJogo() {
    tentativa = 1
    mensagemPadrao()
    limparInput()
    numero = gerarNumero()
    document.getElementById("reiniciar").setAttribute("disabled", true)


}
