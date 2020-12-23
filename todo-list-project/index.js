// printed Todo List from Local Storage
window.addEventListener('load', function () {
    printListMenu();

    if (TodoDataStorage.todoAmount() != 0) {
        printTodoDetails(0)
    }
})

// added list Menu(section menu)
let listMenuInput = document.getElementById('listMenuInput');
let addListMenuButton = document.getElementById('addListMenuButton');

listMenuInput.addEventListener("keyup", function (event) {

    if (event.key === 'Enter') {
        addListMenuButton.click();
    } else {
        document.getElementById("listMenuEmptyInputPopup").classList.remove('show')
    }
});

addListMenuButton.addEventListener('click', function () {

    if (listMenuInput.value == "") {
        document.getElementById("listMenuEmptyInputPopup").classList.add('show')

    } else {

        TodoDataStorage.addTodo(new TodoList(listMenuInput.value, []))
        listMenuInput.value = '';

        printListMenu();
        printTodoDetails(TodoDataStorage.todoAmount() - 1)
    }
});

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

// Button for section menu
function createButtonComponent(id, className, text, clickActionCallback) {

    let buttonNode = document.createElement('button')
    buttonNode.className = className
    buttonNode.id = id
    buttonNode.textContent = text
    buttonNode.addEventListener('click', clickActionCallback)

    return buttonNode;
}

// Popup for section menu input
function createPopupComponent(id, text) {

    let popupNode = document.createElement('div')
    popupNode.className = 'popup'

    let popupSpanNode = document.createElement('span')
    popupSpanNode.id = id
    popupSpanNode.textContent = text
    popupSpanNode.className = 'popuptext'
    popupNode.appendChild(popupSpanNode);

    return popupNode;
}

//implemented section content
function printTodoDetails(listIndex) {
    const todoItemCreationSection = document.getElementById('todoItemCreationSection');
    todoItemCreationSection.innerHTML = ""

    const deleteButtonSection = document.getElementById('deleteButtonSection');
    deleteButtonSection.innerHTML = "";

    const listNameSection = document.getElementById('listNameSection');
    listNameSection.innerHTML = "";

    if (listIndex != null) {
        let componentPopup = createPopupComponent('listDstailsEmptyInputPopup', 'Please fill item name');
        todoItemCreationSection.appendChild(componentPopup)

        const addItemInputNode = document.createElement('input')
        addItemInputNode.addEventListener('keyup', (event) => onkeyupAddTodoItemInput(event, listIndex))
        addItemInputNode.id = 'addItemInput'
        addItemInputNode.className = 'inputForm'
        addItemInputNode.setAttribute('placeholder', 'Add item')
        todoItemCreationSection.appendChild(addItemInputNode);

        const addItemButtonNode = createButtonComponent('buttonAddItem', 'addButton', 'Add', () => addTodoItem(listIndex));
        todoItemCreationSection.appendChild(addItemButtonNode);

        const deleteListButtonNode = createButtonComponent('buttonDeleteItem', 'deleteList', 'Delete list', () => openPopup(listIndex));
        deleteButtonSection.appendChild(deleteListButtonNode);

        listNameSection.innerHTML = TodoDataStorage.getListTitleByIndex(listIndex);
    }

    printList(listIndex)
}

// Section content (print list item)

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

    if (event.key === 'Enter') {
        addTodoItem(todoIndex);
    } else {
        document.getElementById("listDstailsEmptyInputPopup").classList.remove('show')
    }
};

function addTodoItem(todoIndex) {

    let inputFieldForItem = document.getElementById('addItemInput');

    if (inputFieldForItem.value == "") {
        document.getElementById("listDstailsEmptyInputPopup").classList.add('show')

    } else {
        TodoDataStorage.addTodoItemByIndex(todoIndex, new TodoItem(false, inputFieldForItem.value))
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

// Button delete Todo List & Popup elements
function openPopup(index) {
    const modalBoxNode = document.getElementById('modalBox');
    modalBoxNode.style.display = 'block';
    modalBoxNode.setAttribute('listIndexToDelete', index)
};

function closePopup() {
    document.getElementById('modalBox').style.display = 'none';
};


function deleteTodoList() {
    const modalBoxNode = document.getElementById('modalBox');
    const listIndexToDeleteStr = modalBoxNode.getAttribute('listIndexToDelete')

    TodoDataStorage.deleteTodoListByIndex(Number(listIndexToDeleteStr));
    printListMenu()
    printTodoDetails(TodoDataStorage.todoAmount() > 0 ? 0 : null)

    closePopup()
};