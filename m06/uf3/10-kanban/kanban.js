/*
 * Eventos Drag & Drop:
    - dragstart
    - dragend
    - dragenter
    - dragleave

 * Eventos
    - click
    - keyup
*/
document.addEventListener('DOMContentLoaded', () => {

});

let elementOrigen;
const newTaskBtn = document.getElementById('add-task');
let toDo = document.getElementById('to-do');
const input = document.getElementById('write-task');

// clicar el botón
newTaskBtn.addEventListener('click', showInput);
// clicar tecla enter y crear tarea
input.addEventListener('keyup', createTask);

function showInput () {
   // mostrar input y ocultar botón
   if (input.style.display === 'none') {
      input.style.display = 'flex';
      input.value = '';
      newTaskBtn.style.display = 'none';
   } else {
      input.style.display = 'none';
   }1
}

function createTask (e) {
   let divTask = document.createElement('div');
   divTask.className = 'taskBox';
   divTask.setAttribute('draggable', 'true');

   if (e.key === 'Enter') {
      divTask.innerHTML = e.target.value;
      toDo.parentNode.insertBefore(divTask, toDo)

      input.style.display = 'none';
      newTaskBtn.style.display = 'flex';
   }

   // drag & drop events
   divTask.addEventListener('dragstart', dragStartHandler);
   divTask.addEventListener('dragend', dragEndHandler);
   divTask.addEventListener('dragleave', dragLeaveHandler); 
   divTask.addEventListener('dragenter', dragEnterHandler); 
   divTask.addEventListener('drop', dropElement);
}

function dragStartHandler (e) {
   e.target.classList.add('drag-to-do');
}

function dragEndHandler (e) {
   e.target.classList.remove('drag-to-do');
}

function dragEnterHandler (e) {
   e.target.classList.add('drag-done');  
}

function dragLeaveHandler (e) {
   e.target.classList.remove('drag-done');
}
function dropElement (e) {
   e.target.appendChild(document.getElementById(e.target));
}
