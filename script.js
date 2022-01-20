const MENU = document.getElementById('menu')
const PLAYER_X = document.getElementById('x')
const PLAYER_O = document.querySelector(".escolha-player__o")
const QUADRADOS = document.querySelectorAll(".quadrado")
const quadradosUtilizados = []
const X = `<div class="x"><div class="x1"></div><div class="x2"></div></div>`
const O = `<div class="o"><div class="o-fora"><div class="o-dentro"></div></div></div>`

function iniciaJogo() {
    MENU.innerHTML = `
    <div class="menu__escolha-player">
        <div class="escolha-player__x" id="x" onclick="carregaNovoMenu()">
            <div class="x1-pequeno"></div>
            <div class="x2-pequeno"></div>
        </div>
        <div class="escolha-player__texto">
            Escolha!
        </div>
        <div class="escolha-player__o">
            <div class="o-fora o-fora-pequeno">
                <div class="o-dentro o-dentro-pequeno"></div>
            </div>
        </div>
    </div>
    `
}

iniciaJogo()

function carregaNovoMenu() {
    // TO DO 
    MENU.innerHTML = ""
}

QUADRADOS.forEach(quadrado => {
    quadrado.addEventListener('click', checaSeQuadradoEstaOcupado)
});

function checaSeQuadradoEstaOcupado(i) {
    let numeroDoQuadrado = i.path[0].dataset.quadrado
    if (quadradosUtilizados.includes(numeroDoQuadrado) == false) {
        quadradosUtilizados.push(numeroDoQuadrado)
        marcaQuadradoNaTela(i)
    }
}

function marcaQuadradoNaTela(quadrado) {
    quadrado.path[0].innerHTML = O
}

