let inputField = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let itemList = document.getElementById('itemList').children[0];
let taskAdded = document.getElementById('taskAdded');
let taskRemoved = document.getElementById('taskRemoved');
let closeAdd = taskAdded.children[1];
let closeRm = taskRemoved.children[1];
let list = [/*
  { "id": 99, "task": "Estudar", "isFinished": false },
  { "id": 100, "task": "Treinar", "isFinished": false },
  { "id": 101, "task": "Jogar", "isFinished": false },
  { "id": 102, "task": "Trabalhar", "isFinished": false }*/
];
let i = 0;

/*
insert task
list.forEach((item) => {
  fnAddItems(item.id, item.task);
})
*/

let fnNotificationEffect = (idNotification) => {

  idNotification.style.right = '3em';
  idNotification.style.transition = 'right 2s';

  setTimeout(() => {

    idNotification.style.right = '-20em';
    idNotification.style.transition = 'right 2s';

  }, 4000)
}

let fnAddTask = (task) => {

  if (task) {
    list.push({ id: ++i, task: task, isFinished: false });

    fnAddItems(i, task);
    fnNotificationEffect(taskAdded);
  }

}

let fnAddItems = (i, task) => {

  let html =
    `<tr id="${i}"> 
      <td>
        <input type="checkbox"/>            
      </td>      
      <td>
        ${task}      
      </td>
      <td>
        <i class="fa fa-trash btnExc" 
          style="font-size: 1.3em"          
          onclick="fnRmItems(${i})">
        </i>
      </td>
    </tr>`;

  itemList.insertAdjacentHTML("beforeend", html);

  inputField.value = "";
}

let fnRmItems = (thisListId) => {

  let rmElement = document.getElementById(thisListId);

  let rmElementIndex = list.findIndex((element) => {
    return element.id == thisListId;
  });

  list.splice(rmElementIndex, 1);
  rmElement.remove();

  fnNotificationEffect(taskRemoved);

}

addButton.addEventListener('click', () => {

  fnAddTask(inputField.value);
  fnToggleBtn();

})

closeAdd.addEventListener('click', () => {

  taskAdded.style.right = '-20em';
  taskAdded.style.transition = 'right 2s';

})

closeRm.addEventListener('click', () => {

  taskRemoved.style.right = '-20em';
  taskRemoved.style.transition = 'right 2s';

})


inputField.addEventListener('keyup', () => {

  fnToggleBtn();

})

let fnToggleBtn = () => {

  if (!inputField.value) {
    addButton.style.opacity = 0.7;
    addButton.disabled = true;
    addButton.style.cursor = 'not-allowed';
  } else {
    addButton.style.opacity = 1;
    addButton.disabled = false;
    addButton.style.cursor = 'pointer';
  }

}

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    fnAddTask(inputField.value);
  }
})