document.addEventListener("DOMContentLoaded", loadTodos);

function newTodo() {
    let task = prompt("Enter a new TO DO:");
    if (task && task.trim() !== "") {
        addTodo(task.trim());
        saveTodos();
    }
}

function addTodo(text) {
    let ftList = document.getElementById("ft_list");

    let todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.textContent = text;
    todoDiv.addEventListener("click", () => removeTodo(todoDiv));

    ftList.prepend(todoDiv);
}

function removeTodo(todo) {
    if (confirm("Do you really want to delete this TO DO?")) {
        todo.remove();
        saveTodos();
    }
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });

    document.cookie = "todos=" + JSON.stringify(todos) + "; path=/";
}

function loadTodos() {
    let cookies = document.cookie.split("; ");
    let todoCookie = cookies.find(row => row.startsWith("todos="));
    
    if (todoCookie) {
        let todoList = JSON.parse(todoCookie.split("=")[1]);
        todoList.forEach(todo => addTodo(todo));
    }
}