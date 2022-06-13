let inputField = document.getElementById('taskInput');
let addButton = document.getElementById('addButton');
let itemList = document.getElementById('itemList');
let list = [];
let i = 0;

let fnAddTask = (task) => {

  if (task) {
    list.push({ id: ++i, task: task, isFinished: false });

    fnAddItems(i, task);
  }

}

let fnAddItems = (i, task) => {

  let html =
    `<li id="${i}"> 
       <i class="fa fa-trash btnExc" 
          style="color:red;"
          onclick="fnRmItems(${i})">
        </i>
       ${task}
      <input type="checkbox"/>
    </li>`;

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




