document.addEventListener("DOMContentLoaded", function () {
    const ftList = document.getElementById("ft_list");
    const newButton = document.getElementById("new");

    loadTodos();

    newButton.addEventListener("click", function () {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText) {
            addTodo(todoText);
            saveTodos();
        }
    });

    function addTodo(text) {
        const div = document.createElement("div");
        div.className = "todo";
        div.textContent = text;

        div.addEventListener("click", function () {
            if (confirm("Do you want to remove this TO DO?")) {
                div.remove();
                saveTodos();
            }
        });

        ftList.prepend(div); 
    }

    function saveTodos() {
        const todos = [];
        document.querySelectorAll(".todo").forEach(todo => {
            todos.push(todo.textContent);
        });
        document.cookie = "todos=" + JSON.stringify(todos) + ";path=/";
    }

    function loadTodos() {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            if (cookie.startsWith("todos=")) {
                const todos = JSON.parse(cookie.substring(6));
                todos.forEach(todo => addTodo(todo));
                break;
            }
        }
    }
});
