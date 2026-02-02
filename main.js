// Torna o JavaScript mais rígido com seu código
'use strict'

// Criação de variável
const botaoTrocarCor = document.getElementById('botao-trocar-cor')
const botaoVerde = document.getElementById('botao-verde')
const botaoVermelho = document.getElementById('botao-vermelho')

// Função para trocar a cor de fundo
function trocarCor() {
    // Pega a cor informada pelo usuário
    const corUsuario = document.getElementById('cor-usuario').value

    // Troca de cor em português (lima, bege, carmesim, rosa-choque)
    if (corUsuario == 'lima') {
        document.documentElement.style.setProperty('--color-bg', 'lime')
    } else if (corUsuario == 'bege') {
        document.documentElement.style.setProperty('--color-bg', 'beige')
    } else if (corUsuario == 'carmesim') {
        document.documentElement.style.setProperty('--color-bg', 'crimson')
    } else if (corUsuario == 'rosa-choque') {
        document.documentElement.style.setProperty('--color-bg', 'hotpink')
    } else {
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }
}

// Botão de cor verde
function trocarCorVerde(){
    document.documentElement.style.setProperty('--color-bg', 'green')
}

// Botão de cor vermelho
function trocarCorVermelho(){
    document.documentElement.style.setProperty('--color-bg', 'red')
}

// Ativa somente com click
botaoTrocarCor.addEventListener('click', trocarCor)
botaoVerde.addEventListener('click', trocarCorVerde)
botaoVermelho.addEventListener('click', trocarCorVermelho)