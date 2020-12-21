window.addEventListener('load', function () {
    printListMenu();

    if (TodoDataStorage.todoAmount() != 0) {
        printTodoDetails(0)
    }
})

// added list Menu
let listMenuInput = document.getElementById('listMenuInput');
let addListMenuButton = document.getElementById('addListMenuButton');


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

        TodoDataStorage.addTodo(new TodoList(listMenuInput.value, []))
        listMenuInput.value = '';

        printListMenu();
        printTodoDetails(TodoDataStorage.todoAmount() - 1)
    }
});

function createButtonComponent(id, className, text, clickActionCallback) {

    let buttonNode = document.createElement('button')
    buttonNode.className = className
    buttonNode.id = id
    buttonNode.textContent = text
    buttonNode.addEventListener('click', clickActionCallback)

    return buttonNode;
}


function printTodoDetails(listIndex) {

    console.log('printTodoDetails: ', listIndex)
    const todoItemCreationSection = document.getElementById('todoItemCreationSection');
    todoItemCreationSection.innerHTML = ""

    const deleteButtonSection = document.getElementById('deleteButtonSection');
    deleteButtonSection.innerHTML = "";

    const listNameSection = document.getElementById('listNameSection');
    listNameSection.innerHTML = "";

    if (listIndex != null) {
        const addItemInputNode = document.createElement('input')
        addItemInputNode.addEventListener('keyup', (event) => onkeyupAddTodoItemInput(event, listIndex))
        addItemInputNode.id = 'addItemInput'
        addItemInputNode.className = 'inputForm'
        addItemInputNode.setAttribute('placeholder', 'Add item')
        todoItemCreationSection.appendChild(addItemInputNode);    
    
        const addItemButtonNode = createButtonComponent('buttonAddItem', 'addButton', 'Add', () => addTodoItem(listIndex));
        todoItemCreationSection.appendChild(addItemButtonNode);

        const deleteListButtonNode = createButtonComponent('buttonDeleteItem', 'deleteList', 'Delete list', () => deleteTodoList(listIndex));
        deleteButtonSection.appendChild(deleteListButtonNode);

        listNameSection.innerHTML = TodoDataStorage.getListTitleByIndex(listIndex);
    }

    printList(listIndex)
}

function printListMenu() {

    let componentListMenu = '';

    TodoDataStorage.getAllTitles().forEach(function (title, i) {
        componentListMenu += `
        <button class="buttonListName" onclick="printTodoDetails(${i})"  id="todo_${i}">${title}</button>
        `;
    });

    let todolistsPicker = document.getElementById('todolistsPicker');
    todolistsPicker.innerHTML = componentListMenu;

};

// added List Details

function printList(listIndex) {

    let todoItemsContent = '';

    if (listIndex != null) {

        let items = TodoDataStorage.getListItemsByIndex(listIndex)
        items.forEach(function (item, i) {

            todoItemsContent += `
        <li class="inputCheckboxElem">
            <input type='checkbox' onclick='checkItem(${listIndex}, ${i})' id='check_${i}' ${item.checked ? 'checked' : ''}>
            <label for='${i}'>${item.todo}</label>
            <button onclick="deleteElem(${listIndex}, ${i})"><i class="fas fa-trash fa-2x"></i></button>
        </li>
        `;

        })
    };

    let listToDo = document.querySelector('#listToDo');
    listToDo.innerHTML = todoItemsContent;
};

function onkeyupAddTodoItemInput(event, todoIndex) {
    console.log('onkeyupAddTodoItemInput: ', todoIndex)
    if (event.key === 'Enter') {
        addTodoItem(todoIndex);
    }
};

function deleteTodoList(index) {
    TodoDataStorage.deleteTodoListByIndex(index);
    printListMenu()
    printTodoDetails(TodoDataStorage.todoAmount() > 0 ? 0 : null)
};

function addTodoItem(todoIndex) {

    console.log('add Todo Item: ', todoIndex, TodoDataStorage.getListTitleByIndex(todoIndex))
    let inputFieldForItem = document.getElementById('addItemInput');

    if (inputFieldForItem.value == "") {
        alert("Please add item");
        return false;
    } else {
        TodoDataStorage.addTodoItemByIndex(todoIndex, new TodoItem(false, inputFieldForItem.value))
        console.log('going to print list. todoIndex: ', todoIndex);
        printList(todoIndex);
        inputFieldForItem.value = "";
    }
};

function deleteElem(todoIndex, indexItem) {
    TodoDataStorage.deleteTodoItemByIndexes(todoIndex, indexItem);
    printList(todoIndex);
};

function checkItem(todoIndex, indexItem) {
    TodoDataStorage.checkTodoItemByIndexes(todoIndex, indexItem);
    printList(todoIndex);
};