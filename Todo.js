const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function addButton() {
  if (taskInput.value.trim() === '') {
    addBtn.setAttribute('disabled', true);
  } else {
    addBtn.removeAttribute('disabled');
  }
}
taskInput.addEventListener('input', addButton);
addButton();



addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
   tasks.push({ text: taskText });
  saveTasks(tasks); 
    const li = document.createElement('li');
  li.textContent = taskText; 
  li.title = 'Click to mark complete. Double-click to delete.'; 
 li.addEventListener('click', () => {
    li.classList.add('highlight');
  saveTasks(tasks);

  });
  li.addEventListener('mouseout', () => {
    li.classList.remove('highlight');
  });

  li.addEventListener('click',()=>{
    li.classList.toggle('completed')
      saveTasks(tasks);
  });

   li.addEventListener('dblclick', () => {
    li.parentElement.removeChild(li);
    updateTaskCount();
    saveTasks(tasks);

  });
  taskList.appendChild(li);
  taskInput.value='';
  addButton();
 saveTasks(tasks)
});
