// Seleção de elementos
const titulo = document.querySelector('#titulo-Principal');
const input = document.querySelector('#tarefa');
const btnCriar = document.querySelector('#meuBotão');
const lista = document.querySelector('#lista');


titulo.textContent = "MINHA LISTA DE TAREFAS";
titulo.classList.add('titulo-roxo');

// Função para adicionar tarefa
btnCriar.addEventListener('click', function () {
    const tarefaTexto = input.value.trim(); // Remove espaços extras

    //  não deixa adicionar se o campo estiver vazio
    if (tarefaTexto === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // Cria o novo item da lista
    const novoItem = document.createElement('li');
    novoItem.textContent = tarefaTexto;

    // Adiciona o item à lista 
    lista.appendChild(novoItem);

    // Limpa o input
    input.value = '';
    input.focus();
});

//  remove tarefa 

lista.addEventListener('click', function (event) {  
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});