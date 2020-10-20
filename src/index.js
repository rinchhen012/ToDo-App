// selectors
const todoInput = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// event listeners
document.addEventListener('DOMContentLoaded', getTodos);
button.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);

// functions
function addTodo(e){
    // prevents form submitting
    e.preventDefault();

    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // add todo to local storage
    saveLocalTodos(todoInput.value);
   
    // create check mark & del button & insert to todoDiv
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('check-btn');
    todoDiv.appendChild(checkButton);
    const delButton = document.createElement('button');
    delButton.innerHTML = '<i class="fas fa-trash"></i>';
    delButton.classList.add('del-btn');
    todoDiv.appendChild(delButton);

    // insert todoDiv in todoList
    todoList.appendChild(todoDiv);

    // clear input
    todoInput.value = '';
}

function deleteTodo(e){
    const item = e.target;

    // delete todo 
    if (item.classList[0] === 'del-btn'){
        const i = item.parentElement;

        // animation for delete
        i.classList.add('fall');  
        removeLocalTodos(i);
        i.addEventListener('transitionend', e => {
            i.remove(); 
        });
    }
    if (item.classList[0] === 'check-btn'){
        // toggle => add/rem class 'completed' in check button
        i.classList.toggle('completed');
    }
}

function filterTodo (e) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch(e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } 
                else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } 
                else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    // check if there are todos already in there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
     // check if there are todos already in there
     let todos;
     if(localStorage.getItem('todos') === null){
         todos = [];
     }
     else {
         todos = JSON.parse(localStorage.getItem('todos'));
     }
     todos.forEach(todo => {
         // todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");

        // create li~~
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');

        // insert todo list inside todoDiv
        todoDiv.appendChild(newTodo);

        // create check mark & del button & insert to todoDiv
        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add('check-btn');
        todoDiv.appendChild(checkButton);
        const delButton = document.createElement('button');
        delButton.innerHTML = '<i class="fas fa-trash"></i>';
        delButton.classList.add('del-btn');
        todoDiv.appendChild(delButton);
        
        // insert todoDiv in todoList
        todoList.appendChild(todoDiv);
     });
}

function removeLocalTodos(todo) {
    // check if there are todos already in there
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
