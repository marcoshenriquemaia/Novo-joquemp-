const $pedra = document.querySelector(".botao-pedra");
const $papel = document.querySelector(".botao-papel");
const $tesoura = document.querySelector('.botao-tesoura');
const $resultado = document.querySelector('.vencedor');
const $campo1 = document.querySelector('.campo1');
const $campo2 = document.querySelector('.campo2');
const $placar1 = document.querySelector('.jogador');
const $placar2 = document.querySelector('.bot');
const $reiniciar = document.querySelector('.botao-reiniciar');
const $checkbox = document.querySelector('.checkbox');
const $alerta = document.querySelector('.alerta');
const $mensagem = document.querySelector('.mensagem');
const $botaoAlerta = document.querySelector('.botao-alerta');
const opcao = ["pedra", "papel", "tesoura"]

let jogadaJogador;
let jogadaBot;
let resultado;
let pontuacaoJogador1 = 0;
let pontuacaoJogador2 = 0;
let marcado = false;

function bot() {
    const random = Math.floor(Math.random() * 3);
    jogadaBot = opcao[random];
}

function checarVencedor(jogadaJogador, jogadaBot) {
    if (jogadaJogador == opcao[0] && jogadaBot == opcao[2] ||
        jogadaJogador == opcao[1] && jogadaBot == opcao[0] ||
        jogadaJogador == opcao[2] && jogadaBot == opcao[1]) {
        resultado = 0;
        pontuacaoJogador1++;

    } else if (jogadaJogador == jogadaBot) {
        resultado = 1;
    } else {
        resultado = 2;
        pontuacaoJogador2++;
    }
}

$pedra.addEventListener('click', function (event) {
    if (marcado && pontuacaoJogador2 == 3 || marcado && pontuacaoJogador1 == 3) {
        return
    } else {
        jogadaJogador = opcao[1];
        bot();
        checarVencedor(jogadaJogador, jogadaBot);
        escolheIcone();
        alteraNormal();
        atribuirPontos();
    }

})

$papel.addEventListener('click', function (event) {
    if (marcado && pontuacaoJogador2 == 3 || marcado && pontuacaoJogador1 == 3) {
        return
    } else {
        jogadaJogador = opcao[1];
        bot();
        checarVencedor(jogadaJogador, jogadaBot);
        escolheIcone();
        alteraNormal();
        atribuirPontos();
    }
})

$tesoura.addEventListener('click', function (event) {
    if (marcado && pontuacaoJogador2 == 3 || marcado && pontuacaoJogador1 == 3) {
        return
    } else {
        jogadaJogador = opcao[1];
        bot();
        checarVencedor(jogadaJogador, jogadaBot);
        escolheIcone();
        alteraNormal();
        atribuirPontos();
    }
})

function alteraNormal() {
    if (marcado == false) {
        function mostrarResultado() {
            if (resultado == 0) {
                $resultado.innerHTML = "Você ganhou!";
            } else if (resultado == 1) {
                $resultado.innerHTML = "Empatou!";
            } else {
                $resultado.innerHTML = "O BOT ganhou!";
            }
        }
        mostrarResultado();
    } else {
        melhorDeTres();
    }
}

function atribuirPontos() {
    $placar1.innerHTML = pontuacaoJogador1;
    $placar2.innerHTML = pontuacaoJogador2;
}

function escolheIcone() {
    $campo1.innerHTML = mostraIcone(jogadaJogador);
    $campo2.innerHTML = mostraIcone(jogadaBot);
}

function mostraIcone(jogada) {
    if (jogada == opcao[0]) {
        return '<img src="pedra.png">';
    } else if (jogada == opcao[1]) {
        return '<img src="papel.png">';
    } else {
        return '<img src="tesoura.png">';
    }
}

function limpar() {
    $resultado.innerHTML = '';
    $campo1.innerHTML = '';
    $campo2.innerHTML = '';
    $placar1.innerHTML = '0';
    $placar2.innerHTML = '0';
    pontuacaoJogador1 = 0;
    pontuacaoJogador2 = 0;
}
$reiniciar.addEventListener('click', limpar);

$checkbox.addEventListener('click', function (event) {
    $checkbox.classList.toggle('checkbox2');
    if (marcado) {
        marcado = false;
        limpar();
    } else {
        marcado = true;
        limpar();
    }
})

function melhorDeTres() {
    if (pontuacaoJogador2 <3 && pontuacaoJogador1 < 3) {
        $resultado.innerHTML = "Melhor de cinco";
    } else if (pontuacaoJogador2 == 3) {
        $resultado.innerHTML = "O BOT ganhou a MD5";
        setTimeout(mostrarPerdeu, 500);
    } else {
        $resultado.innerHTML = "Você ganhou a MD5";
        setTimeout(mostrarGanhou, 500);
    }
}

function mostrarGanhou(){
    $mensagem.innerHTML = 'Você ganhou a MD5!';
    $alerta.classList.toggle('alerta2');
}
function mostrarPerdeu(){
    $alerta.classList.toggle('alerta2');
    $mensagem.innerHTML = 'O BOT ganhou a MD5!';
}

$botaoAlerta.addEventListener('click', function(event){
    $alerta.classList.toggle('alerta2');
    limpar();
})



