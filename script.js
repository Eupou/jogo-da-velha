const MENU = document.getElementById('menu')
const QUADRADOS = document.querySelectorAll(".quadrado")
let quadradosUtilizados = []
let quemUtilizaQuadrado = []
const X = `<div class="x"><div class="x1"></div><div class="x2"></div></div>`
const O = `<div class="o"><div class="o-fora"><div class="o-dentro"></div></div></div>`
let player = ""
let player2 = ""
let quemEstaJogando = ""

function iniciaJogo() {
    MENU.innerHTML = `
    <div class="menu__escolha-player">
        <div class="escolha-player__x" id="x" onclick="mudaEstadoPlayer('X')">
            <div class="x1-pequeno"></div>
            <div class="x2-pequeno"></div>
        </div>
        <div class="escolha-player__texto">
            Escolha!
        </div>
        <div class="escolha-player__o" onclick="mudaEstadoPlayer('O')">
            <div class="o-fora o-fora-pequeno">
                <div class="o-dentro o-dentro-pequeno"></div>
            </div>
        </div>
    </div>
    `
}

iniciaJogo()

// Troca o personagem que o player vai usar na pertida
function mudaEstadoPlayer(escolha) {
    console.log(escolha)
    if (escolha == "X") {
        player = X
        player2 = O
    } else {
        player = O
        player2 = X
    }
    MENU.innerHTML = ""
    quemEstaJogando = "player"
}

QUADRADOS.forEach(quadrado => {
    quadrado.addEventListener('click', checaSeQuadradoEstaOcupado)
});

function checaSeQuadradoEstaOcupado() {
    let numeroDoQuadrado = this.id
    if (quadradosUtilizados.includes(Number(numeroDoQuadrado)) == false && player != "" && quemEstaJogando == "player") {
        quadradosUtilizados.push(Number(numeroDoQuadrado))
        quemUtilizaQuadrado.push(0)
        marcaQuadradoNaTela(this)
    }
}

function marcaQuadradoNaTela(quadrado) {
    quadrado.innerHTML = player
    checaVitoria()
    quemEstaJogando = "maquina"
    setTimeout(maquina, 1000);
}

function maquina() {   
    let possoJogar = true

    while (possoJogar == true && quadradosUtilizados.length <= 8) {
        let jogada = Math.floor(Math.random() * 9 + 1)
        
        if (quadradosUtilizados.includes(jogada) == false) {
            quadradosUtilizados.push(Number(jogada))
             quemUtilizaQuadrado.push(1)
            QUADRADOS[jogada - 1].innerHTML = player2
            possoJogar = false
        }
    }
    checaVitoria()
    quemEstaJogando = "player"
}
    
function checaVitoria() {
    console.log("entrei na checagem")
    let a1 = quadradosUtilizados.indexOf(1)
    let a2 = quadradosUtilizados.indexOf(2)
    let a3 = quadradosUtilizados.indexOf(3)

    let b1 = quadradosUtilizados.indexOf(4)
    let b2 = quadradosUtilizados.indexOf(5)
    let b3 = quadradosUtilizados.indexOf(6)

    let c1 = quadradosUtilizados.indexOf(7)
    let c2 = quadradosUtilizados.indexOf(8)
    let c3 = quadradosUtilizados.indexOf(9)

    
    if ((quemUtilizaQuadrado[a1] == quemUtilizaQuadrado[a2] && quemUtilizaQuadrado[a1] == quemUtilizaQuadrado[a3] && a1 != -1) || (quemUtilizaQuadrado[a1] == quemUtilizaQuadrado[b2] && quemUtilizaQuadrado[a1] == quemUtilizaQuadrado[c3] && a1 != -1) || (quemUtilizaQuadrado[a1] == quemUtilizaQuadrado[b1] && quemUtilizaQuadrado[a1] == quemUtilizaQuadrado[c1] && a1 != -1)) {
         if (quemUtilizaQuadrado[a1] == 0) {
                console.log("jogador ganhou")
            } else if (quemUtilizaQuadrado[a1] == 1) {
                console.log("maquina ganhou")
            } 
        console.log("oioi")
    } else if ((quemUtilizaQuadrado[b2] == quemUtilizaQuadrado[a2] && quemUtilizaQuadrado[b2] == quemUtilizaQuadrado[c2] && b2 != -1) || (quemUtilizaQuadrado[b2] == quemUtilizaQuadrado[a3] && quemUtilizaQuadrado[b2] == quemUtilizaQuadrado[c1] && quemUtilizaQuadrado[b2] != -1) || (quemUtilizaQuadrado[b2] == quemUtilizaQuadrado[b1] && quemUtilizaQuadrado[b2] == quemUtilizaQuadrado[b3] && quemUtilizaQuadrado[b2] != -1)) {
         if (quemUtilizaQuadrado[b2] == 0) {
                console.log("jogador ganhou")
            } else if (quemUtilizaQuadrado[b2] == 1) {
                console.log("maquina ganhou")
            } 
        console.log("oioi 2222")
    } else if ((quemUtilizaQuadrado[c3] == quemUtilizaQuadrado[c1] && quemUtilizaQuadrado[c3] == quemUtilizaQuadrado[c2] && c3 != -1) || (quemUtilizaQuadrado[c3] == quemUtilizaQuadrado[a3] && quemUtilizaQuadrado[c3] == quemUtilizaQuadrado[b3] && c3 != -1)) {
        if (quemUtilizaQuadrado[c3] == 0) {
                console.log("jogador ganhou")
            } else if (quemUtilizaQuadrado[c3] == 1) {
                console.log("maquina ganhou")
            } 
        console.log("oioi 33333")
    }
}