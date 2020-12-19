class TodoList {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }
}

class TodoItem {
    constructor(checked, todo) {
        this.checked = checked;
        this.todo = todo;
    }
}

class TodoDataStorage {
    static #todoLists = [];

    constructor() {}

    static addTodo(todoList) {
        TodoDataStorage.#todoLists.push(todoList);
    }

    static todoAmount() {
        return TodoDataStorage.#todoLists.length;
    }

    static getListTitleByIndex(listIndex) {
        return TodoDataStorage.#todoLists[listIndex].title;
    }

    static getAllTitles() {
        return TodoDataStorage.#todoLists.map(todoList => todoList.title);
    }

    static getListItemsByIndex(listIndex) {
        return TodoDataStorage.#todoLists[listIndex].items
    }

    static deleteTodoListByIndex(index) {
       TodoDataStorage.#todoLists.splice(index, 1);
    }

    static addTodoItemByIndex(todoIndex, item) {
      TodoDataStorage.#todoLists[todoIndex].items.push(item);
    }

    static deleteTodoItemByIndexes(todoIndex, indexItem) {
        TodoDataStorage.#todoLists[todoIndex].items.splice(indexItem, 1);
    }

    static checkTodoItemByIndexes(todoIndex, indexItem) {
        TodoDataStorage.#todoLists[todoIndex].items[indexItem].checked = !TodoDataStorage.#todoLists[todoIndex].items[indexItem].checked;
    }
}
