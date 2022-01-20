const MENU = document.getElementById('menu')
const PLAYER_X = document.getElementById('x')
const PLAYER_O = document.querySelector(".escolha-player__o")
const QUADRADOS = document.querySelectorAll(".quadrado")
let quadradosUtilizados = []
const X = `<div class="x"><div class="x1"></div><div class="x2"></div></div>`
const O = `<div class="o"><div class="o-fora"><div class="o-dentro"></div></div></div>`
let player = ""
let player2 = ""
let quemEstaJogando = ""
let repeticoes = 0

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
        marcaQuadradoNaTela(this)
    }
}

function marcaQuadradoNaTela(quadrado) {
    quadrado.innerHTML = player
    quemEstaJogando = "maquina"
    repeticoes++
    setTimeout(maquina, 1000);
}

function maquina() {
    // function confereJogada() {
    //     let jogada = Math.floor(Math.random() * 9)
    //     if (quadradosUtilizados.includes(Number(jogada)) == false) {
    //         quadradosUtilizados.push(Number(jogada + 1))
    //         QUADRADOS[jogada].innerHTML = player2
    //     } else {
    //         confereJogada()
    //         // marcaQuadradoNaTela(QUADRADOS[jogada], player2)
    //     }
    // }
    // confereJogada()

    // concertar as jogadas da maquina, já que ainda apresentam bugs

    function jogadaMaquina() {
        let jogada = Math.floor(Math.random() * 9 + 1)
        if (quadradosUtilizados.includes(jogada) && repeticoes < 9) {
            console.log("não podemos jogar aqui")
            console.log(jogada)
            console.log(quadradosUtilizados)
            jogadaMaquina()
        } else {
            quadradosUtilizados.push(Number(jogada))
            console.log("podemos jogar aqui")
            console.log(jogada)
            console.log(quadradosUtilizados)
            QUADRADOS[jogada - 1].innerHTML = player2
            repeticoes++
        }
    }
    jogadaMaquina()
    quemEstaJogando = "player"
}
    
