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
        printTodoDetails(todoLists.length - 1)
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

        listNameSection.innerHTML = todoLists[listIndex].title;
    }

    printList(listIndex)
}

function printListMenu() {

    let componentListMenu = '';

    todoLists.forEach(function (todo, i) {
        componentListMenu += `
        <button class="buttonListName" onclick="printTodoDetails(${i})"  id="todo_${i}">${todo.title}</button>
        `;
    });

    let todolistsPicker = document.getElementById('todolistsPicker');
    todolistsPicker.innerHTML = componentListMenu;

};

// added List Details

function printList(listIndex) {

    let todoItemsContent = '';

    if (listIndex != null) {
        let items = todoLists[listIndex].items
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
    todoLists.splice(index, 1);
    printListMenu()
    printTodoDetails(todoLists.length > 0? 0: null)
};

function addTodoItem(todoIndex) {

    console.log('add Todo Item: ', todoIndex, todoLists[todoIndex].title)
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
        console.log('going to print list. todoIndex: ', todoIndex);
        printList(todoIndex);
        inputFieldForItem.value = "";
    }
};

function deleteElem(todoIndex, indexItem) {
    todoLists[todoIndex].items.splice(indexItem, 1);

    printList(todoIndex);
};

function checkItem(todoIndex, indexItem) {
    console.log('todoIndex: ', todoIndex, ' indexItem:', indexItem, 'elem:', todoLists[todoIndex].items[indexItem])
    todoLists[todoIndex].items[indexItem].checked = !todoLists[todoIndex].items[indexItem].checked;

    printList(todoIndex);
};