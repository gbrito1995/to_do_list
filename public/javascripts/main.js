let inputField = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let itemList = document.getElementById('itemList').children[0];
let list = [
  { "id": 99, "task": "Estudar", "isFinished": false },
  { "id": 100, "task": "Treinar", "isFinished": false },
  { "id": 101, "task": "Jogar", "isFinished": false },
  { "id": 102, "task": "Trabalhar", "isFinished": false }
];
let i = 0;

let fnAddTask = (task) => {

  if (task) {
    list.push({ id: ++i, task: task, isFinished: false });

    fnAddItems(i, task);
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
          style="color:red;
          font-size:1rem"          
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

}

addButton.addEventListener('click', () => {

  fnAddTask(inputField.value);

})

//teste
list.forEach((item) => {
  fnAddItems(item.id, item.task);
})



