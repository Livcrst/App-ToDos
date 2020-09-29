var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')


var todos = [
    'Fazer Café',
    'Estudar Js',
    'Acessar comunidade'
];

function renderTodos(){
    listElement.innerHTML = ''; //Limpar o valor da lista 

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href','#');


        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos()

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value='';

    renderTodos();
}
buttonElement.onclick = addTodo;