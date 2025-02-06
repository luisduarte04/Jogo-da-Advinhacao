let num = gerarnumeroAleat()


function telaInicial(seletor, mensagem) {
    let tag = document.querySelector(seletor)
    tag.innerHTML = (mensagem)

}
telaInicial("h1", "Jogo da Advinhação")
telaInicial("p", "Escolha um número de 1 a 10:")


function gerarnumeroAleat() {
    return parseInt(Math.random() * 11)
}

