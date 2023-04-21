const toDoList = document.getElementById('to-do');
const inProgressList = document.getElementById('in-progress');
const doneList = document.getElementById('done');

let draggedItem = null;

function handleDragStart(e) {
  draggedItem = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  this.classList.add('over');
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDrop(e) {
  e.preventDefault();
  this.classList.remove('over');
  draggedItem.parentNode.removeChild(draggedItem);
  this.appendChild(draggedItem);
}

function handleDragEnd() {
  draggedItem = null;
}

toDoList.addEventListener('dragstart', handleDragStart);
toDoList.addEventListener('dragover', handleDragOver);
toDoList.addEventListener('dragleave', handleDragLeave);
toDoList.addEventListener('drop', handleDrop);
toDoList.addEventListener('dragend', handleDragEnd);

inProgressList.addEventListener('dragstart', handleDragStart);
inProgressList.addEventListener('dragover', handleDragOver);
inProgressList.addEventListener('dragleave', handleDragLeave);
inProgressList.addEventListener('drop', handleDrop);
inProgressList.addEventListener('dragend', handleDragEnd);

doneList.addEventListener('dragstart', handleDragStart);
doneList.addEventListener('dragover', handleDragOver);
doneList.addEventListener('dragleave', handleDragLeave);
doneList.addEventListener('drop', handleDrop);
doneList.addEventListener('dragend', handleDragEnd);
