
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li);
            });
            
            li.appendChild(deleteButton);
            todoList.appendChild(li);

            todoInput.value = '';
        }
    }





    // document.addEventListener('DOMContentLoaded', () => {
    //     const todoForm = document.getElementById('todo-form');
    //     const todoInput = document.getElementById('todo-input');
    //     const todoList = document.getElementById('todo-list');
    
    //     // Load existing todos from local storage
    //     loadTodos();
    
    //     todoForm.addEventListener('submit', (event) => {
    //         event.preventDefault();
    //         addTodo();
    //     });
    
    //     function addTodo() {
    //         const todoText = todoInput.value.trim();
    //         if (todoText !== '') {
    //             const li = document.createElement('li');
    //             li.textContent = todoText;
                
    //             const deleteButton = document.createElement('button');
    //             deleteButton.textContent = 'Delete';
    //             deleteButton.addEventListener('click', () => {
    //                 todoList.removeChild(li);
    //                 saveTodos();
    //             });
                
    //             li.appendChild(deleteButton);
    //             todoList.appendChild(li);
    
    //             todoInput.value = '';
    //             saveTodos();
    //         }
    //     }
    
    //     function saveTodos() {
    //         const todos = [];
    //         todoList.querySelectorAll('li').forEach(li => {
    //             todos.push(li.firstChild.textContent);
    //         });
    //         localStorage.setItem('todos', JSON.stringify(todos));
    //     }
    
    //     function loadTodos() {
    //         const todos = JSON.parse(localStorage.getItem('todos')) || [];
    //         todos.forEach(todoText => {
    //             const li = document.createElement('li');
    //             li.textContent = todoText;
    
    //             const deleteButton = document.createElement('button');
    //             deleteButton.textContent = 'Delete';
    //             deleteButton.addEventListener('click', () => {
    //                 todoList.removeChild(li);
    //                 saveTodos();
    //             });
    
    //             li.appendChild(deleteButton);
    //             todoList.appendChild(li);
    //         });
    //     }
    // });
    