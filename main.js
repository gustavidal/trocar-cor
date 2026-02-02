// Torna o JavaScript mais rígido com seu código
'use strict'

// Criação de variável
const botaoTrocarCor = document.getElementById('botao-trocar-cor')

// Função para trocar a cor de fundo
function trocarCor() {
    // Pega a cor informada pelo usuário
    const corUsuario = document.getElementById('cor-usuario').value

    if(corUsuario == 'lima'){
        document.documentElement.style.setProperty('--color-bg', 'lime')
    } else if (corUsuario == 'bege'){
        document.documentElement.style.setProperty('--color-bg', 'beige')
    } else if (corUsuario == 'carmesim'){
        document.documentElement.style.setProperty('--color-bg', 'crimson')
    } else if (corUsuario == 'rosa-choque'){
        document.documentElement.style.setProperty('--color-bg', 'hotpink')
    } else {
        document.documentElement.style.setProperty('--color-bg', corUsuario)
    }
}

botaoTrocarCor.addEventListener('click', trocarCor)