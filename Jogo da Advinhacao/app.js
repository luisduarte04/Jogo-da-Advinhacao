let num = gerarnumeroAleat()
let qntd = 1


function telaInicial(seletor, mensagem) {
    let tag = document.querySelector(seletor)
    tag.innerHTML = (mensagem)

}
telaInicial("h1", "Jogo da Advinhação")
telaInicial("p", "Escolha um número de 1 a 10:")


function gerarnumeroAleat() {
    return parseInt(Math.random() * 11)
}


function verificarChute() {
    let chute = document.querySelector("input").value
    let palavraTentativa = qntd == 1 ? "tentativa" : "tentativas"
    if (chute == num) {
        limparinput()
        telaInicial("h1", "Parabéns!")
        telaInicial("p", `Você acertou em ${qntd} ${palavraTentativa}`)
    } else {
        qntd += 1
        limparinput()
        if (chute > num) {
            telaInicial("p", "O número é menor...")
        } else {
            telaInicial("p", "O número é maior...")
        }
    }

}

function limparinput() {
    document.querySelector("input").value = ""
}

