

function addTask() {
    var taskInput = document.getElementById('taskInput');
    // A função trim corta caracteres do texto. Pode especificar a quantidade e a ordem. Caso esteja vazio os caracteres vazio serão removidos (neste contexto são desnecessários)
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.className = 'taskItem';
        li.innerHTML = taskText + '<button onclick="removeTask(this)">X</button>'
        taskList.appendChild(li);
        taskInput.value = '';
    }
    else {
        alert('Por favor, insira uma tarefa válida.');
    }

    setTimeout(function() {
        li.classList.add('move');
    }, 10);
}

function removeTask(button){
    var li = button.parentNode;
        var ul = li.parentNode;
       
        setTimeout(function() {
            li.classList.add('remove');
        }, 10)

        setTimeout(function() {
            ul.removeChild(li)
        }, 200)
}

document.getElementById('taskInput').addEventListener
( 'keypress', function (event){
    if (event.key === 'Enter'){
        addTask();
    };
}
)