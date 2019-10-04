let addButton = document.querySelector('#addBtn');
const fieldText = document.querySelector('#taskInput');
const alert = document.querySelector('.alertMessage');

let isComplete = false;

let todos = [
  /* { name: 'Planchar la ropa', isComplete: false },
  { name: ' Hacer el Super', isComplete: true },
  { name: ' Hacer la tarea', isComplete: false }*/
];

addButton.addEventListener('click', addItemToList);

function addItemToList() {
  if (fieldText.value === '') {
    return;
  }

  let isDuplicated = false;
  todos.forEach(todo => {
    return todo.name == fieldText.value
      ? (isDuplicated = true)
      : (isDuplicated = false);
  });

  if (!isDuplicated) {
    todos.push({
      id: todos.length,
      name: fieldText.value,
      isComplete: false
    });

    fieldText.value = '';
    localStorage.setItem('tareas', JSON.stringify(todos));
    loadTasks();
  } else {
    alert.innerHTML = `
        <div class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Warning!</strong> Articulo repetido.
        </div>`;
  }
}

function removeTask(taskId) {
  todos = todos.filter(task => {
    return task.id !== taskId;
  });
  localStorage.setItem('tareas', JSON.stringify(todos));
  loadTasks();
}

function toggleComplete(taskId) {

  todos.map(task => {
    if (task.id == taskId) {
      task.isComplete = !task.isComplete;
    }
  });

  localStorage.setItem('tareas', JSON.stringify(todos));

  loadTasks();
}

function addTaskOnEnter(event) {
  if (event.key === 'Enter') {
    addItemToList();
  }
}

function loadTasks() {
  document.querySelector('#taskList').innerHTML = todos
    .map(element => {
      return ` 
                <li class="list-group-item checkbox">
                    <div class="row">
                        <div class="col-xs-1 checkbox">
                            <label>
                                <input type="checkbox" onchange="toggleComplete('${
                                  element.id
                                }')" ${element.isComplete ? 'checked' : ''}>
                            </label>
                        </div>
                        <div id="taskText" class="col-xs-9 task-text ${
                          element.isComplete ? 'complete' : ''
                        }">
                            ${element.name}
                        </div>
                        <div class="col-xs-2 delete-icon-area">
                            <button onclick="removeTask('${element.id}')">
                                <i class="delete-icon glyphicon glyphicon-trash"></i>
                            </button>
                        </div>
                    </div> 
                </li>`;
    })
    .join('');
}

function initializeTask() {
  const text = localStorage.getItem('tareas');

  const savedTasks = JSON.parse(text);

  if (!savedTasks) {
    return;
  }

  /*if(todos.length > 0){
    todos = todos.splice(0, todos.length);
  }*/
  todos.length > 0 ? (todos = todos.splice(0, todos.length)) : 

  savedTasks.forEach((task, index) => {
    
        task.id = index;
        todos.push(task);
      });
}

initializeTask();
loadTasks();

function removeAllTasks() {
  todos.splice(0, todos.length);
  localStorage.setItem('tareas', JSON.stringify(todos));
  loadTasks();
}

function removeCompletedTasks() {
  todos = todos.filter(todo => !todo.isComplete);

  localStorage.setItem('tareas', JSON.stringify(todos));
  loadTasks();
}

function completeAllTasks() {

  todos.forEach(task => {
    task.isComplete = true;
  });

  loadTasks();
}
