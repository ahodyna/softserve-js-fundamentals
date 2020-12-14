// added list Menu
let listMenuInput = document.getElementById('listMenuInput');
let addListMenuButton = document.getElementById('addListMenuButton');

let todoLists = [];

listMenuInput.addEventListener("keyup", function (event) {

    if (event.key === 'Enter') {
        addListMenuButton.click();
    }
});

addListMenuButton.addEventListener('click', function () {

    if (listMenuInput.value == "") {
        alert("Name list must be filled out");
        return false;
    } else {

        let todoListData = {
            title: listMenuInput.value,
            items: []
        }

        todoLists.push(todoListData);
        listMenuInput.value = '';

        printListMenu();
        printList(todoLists.length - 1)
    }
});

function printListMenu() {

    let componentListMenu = '';

    todoLists.forEach(function (todo, i) {
        componentListMenu += `
        <button onclick="printList(${i})"  id="todo_${i}">${todo.title}</button>
        `;
    });

    let todolistsPicker = document.getElementById('todolistsPicker');
    todolistsPicker.innerHTML = componentListMenu;

};

// added List Details

function printList(listIndex) {

    let todoItemsContent = '';
    let buttonAddItem = '';
    let buttonDeleteAll = '';
    let inputElem = '';
    let listName = '';

    if (listIndex != null) {

        buttonDeleteAll = `<button onclick="deleteTodoList(${listIndex})">Delete List</button>`;
        inputElem = `<input onkeyup="onkeyupAddTodoItemInput(event, ${listIndex})" id="addItemInput" placeholder="Add item">`;
        buttonAddItem = `<button onclick="addTodoItem(${listIndex})" id="buttonAddItem">Add</button>`;
        listName = todoLists[listIndex].title;

        let items = todoLists[listIndex].items
        items.forEach(function (item, i) {

            todoItemsContent += `
        <li>
            <input type='checkbox' onclick='checkItem(${listIndex}, ${i})' id='${i}' ${item.checked ? 'checked' : ''}>
            <label for='${i}'>${item.todo}</label>
            <button onclick="deleteElem(${listIndex}, ${i})">delete</button>
        </li>
        `;

        })
    };

    let listToDo = document.querySelector('#listToDo');
    listToDo.innerHTML = todoItemsContent;

    let todoButtonCreationSection = document.getElementById('todoButtonCreationSection');
    todoButtonCreationSection.innerHTML = buttonAddItem;

    let deleteButtonSection = document.getElementById('deleteButtonSection');
    deleteButtonSection.innerHTML = buttonDeleteAll;

    let todoItemCreationSection = document.getElementById('todoItemCreationSection');
    todoItemCreationSection.innerHTML = inputElem;

    let listNameSection = document.getElementById('listNameSection');
    listNameSection.innerHTML = listName;
};

function onkeyupAddTodoItemInput(event, todoIndex) {

    if (event.key === 'Enter') {
        addTodoItem(todoIndex);
    }
};

function deleteTodoList(index) {

    todoLists.splice(index, 1);

    printListMenu()
    printList(todoLists.length > 0 ? 0 : null)

};

function addTodoItem(todoIndex) {

    let inputFieldForItem = document.getElementById('addItemInput');

    if (inputFieldForItem.value == "") {
        alert("Please add item");
        return false;
    } else {
        let newItem = {
            todo: inputFieldForItem.value,
            checked: false
        };

        todoLists[todoIndex].items.push(newItem);
        printList(todoLists.length - 1);
        inputFieldForItem.value = "";
    }
};

function deleteElem(todoIndex, indexItem) {
    todoLists[todoIndex].items.splice(indexItem, 1);

    printList(todoLists.length - 1);
};

function checkItem(todoIndex, indexItem) {
    todoLists[todoIndex].items[indexItem].checked = !todoLists[todoIndex].items[indexItem].checked;

    printList(todoLists.length - 1);
};