$(document).ready(function () {
    function escapeHTML(str) { 
        return $("<div>").text(str).html(); // ป้องกัน XSS
    }

    function encodeBase64(str) {
        return btoa(unescape(encodeURIComponent(str))); // Encode เป็น Base64
    }

    function decodeBase64(str) {
        return decodeURIComponent(escape(atob(str))); // Decode กลับ
    }

    function loadTodos() {
        let todos = getCookies("todos");
        if (todos) {
            todos.split("|~|").reverse().forEach(todo => { 
                if (todo) {
                    let decodedTodo = decodeBase64(todo);
                    $("#ft_list").prepend(
                        $("<div>").addClass("todo").text(decodedTodo) 
                    );
                }
            });
        }
    }

    function saveTodos() {
        let todoArray = [];
        $(".todo").each(function () {
            let encodedTodo = encodeBase64($(this).text());
            todoArray.push(encodedTodo);
        });

        let finalCookie = "todos=" + todoArray.join("|~|") + "; path=/";
        document.cookie = finalCookie;
    }

    function getCookies(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : "";
    }

    $("#newTodoBtn").on("click", function () {
        let todo = prompt("Enter a new TO DO:");
        if (todo && todo.trim() !== "") {
            let escapedTodo = escapeHTML(todo.trim());
            $("#ft_list").prepend(
                $("<div>").addClass("todo").text(escapedTodo)
            );
            saveTodos();
        }
    });

    $("#ft_list").on("click", ".todo", function () {
        if (confirm("Do you really want to delete this TO DO?")) {
            $(this).remove();
            saveTodos();
        }
    });

    loadTodos();
});
