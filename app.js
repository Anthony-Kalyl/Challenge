//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do DOM
    const inputAmigo = document.getElementById("amigo"); // Campo de texto para adicionar nomes
    const botaoAdicionar = document.querySelector(".button-add"); // Botão "Adicionar"
    const listaAmigos = document.getElementById("listaAmigos"); // Lista de nomes adicionados
    const botaoSortear = document.querySelector(".button-draw"); // Botão "Sortear"
    const resultadoSorteio = document.getElementById("resultado"); // Resultado do sorteio

    // Array para armazenar os nomes
    let nomes = [];

    // Função para adicionar nomes à lista
    function adicionarAmigo() {
        const nome = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

        // Valida se o campo está vazio
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }

        // Verifica se o nome já foi adicionado
        if (nomes.includes(nome)) {
            alert("Este nome já foi adicionado.");
            return;
        }

        // Adiciona o nome ao array e atualiza a lista
        nomes.push(nome);
        atualizarLista();

        // Limpa o campo de entrada e coloca o foco nele
        inputAmigo.value = "";
        inputAmigo.focus();
    }

    // Função para atualizar a lista de nomes na tela
    function atualizarLista() {
        listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

        // Adiciona cada nome à lista
        nomes.forEach((nome) => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    // Função para sortear um amigo secreto
    function sortearAmigo() {
        if (nomes.length < 2) {
            alert("Adicione pelo menos dois nomes antes de sortear.");
            return;
        }

        // Sorteia um índice aleatório
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        resultadoSorteio.textContent = `Amigo secreto: ${nomes[indiceSorteado]}`;
    }

    // Adiciona eventos aos botões
    botaoAdicionar.addEventListener("click", adicionarAmigo);
    botaoSortear.addEventListener("click", sortearAmigo);
});