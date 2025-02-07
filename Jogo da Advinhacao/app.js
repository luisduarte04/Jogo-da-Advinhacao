let num = gerarnumeroAleat()
let qntd = 1


function passarMensagem(seletor, mensagem) {
    let tag = document.querySelector(seletor)
    tag.innerHTML = (mensagem)

}
function telaInicial() {
    passarMensagem("h1", "Jogo da Advinhação")
    passarMensagem("p", "Escolha um número de 1 a 10:")
}
telaInicial()



function gerarnumeroAleat() {
    return parseInt(Math.random() * 11)
}


function verificarChute() {
    let chute = document.querySelector("input").value
    let palavraTentativa = qntd == 1 ? "tentativa" : "tentativas"
    if (chute == num) {
        limparinput()
        novoJogo()
        passarMensagem("h1", "Parabéns!")
        passarMensagem("p", `Você acertou em ${qntd} ${palavraTentativa}`)
    } else {
        novoJogo()
        qntd += 1
        limparinput()
        if (chute > num) {
            passarMensagem("p", "O número é menor...")
        } else {
            passarMensagem("p", "O número é maior...")
        }
    }

}

function limparinput() {
    document.querySelector("input").value = ""
}

function novoJogo() {
    document.getElementById("reiniciar").removeAttribute("disabled")
}

function reiniciarJogo() {
    num = gerarnumeroAleat()
    qntd = 1
    limparinput()

}