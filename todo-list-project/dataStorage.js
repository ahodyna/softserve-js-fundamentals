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
    static _todoListLocalStorageKey = 'todoListLocalStorageKey';

    constructor() { }

    static _loadData() {
        let str = localStorage.getItem(TodoDataStorage._todoListLocalStorageKey)
        if (str != null) {
            return JSON.parse(str)
        } else {
            return []
        }

    }

    static _saveData(data) {
        localStorage.setItem(TodoDataStorage._todoListLocalStorageKey, JSON.stringify(data))
    }

    static addTodo(todo) {
        let todoArray = TodoDataStorage._loadData();
        todoArray.push(todo);
        TodoDataStorage._saveData(todoArray)
    }

    static todoAmount() {
        return TodoDataStorage._loadData().length;
    }

    static getListTitleByIndex(listIndex) {
        return TodoDataStorage._loadData()[listIndex].title;
    }

    static getAllTitles() {
        return TodoDataStorage._loadData().map(todoList => todoList.title);
    }

    static getListItemsByIndex(listIndex) {
        return TodoDataStorage._loadData()[listIndex].items
    }

    static deleteTodoListByIndex(index) {
        let todoArray = TodoDataStorage._loadData()
        todoArray.splice(index, 1);
        TodoDataStorage._saveData(todoArray)
    }

    static addTodoItemByIndex(todoIndex, item) {
        let todoArray = TodoDataStorage._loadData()
        todoArray[todoIndex].items.push(item);
        TodoDataStorage._saveData(todoArray)
    }

    static deleteTodoItemByIndexes(todoIndex, indexItem) {
        let todoArray = TodoDataStorage._loadData()
        todoArray[todoIndex].items.splice(indexItem, 1);
        TodoDataStorage._saveData(todoArray)
    }

    static checkTodoItemByIndexes(todoIndex, indexItem) {
        let todoArray = TodoDataStorage._loadData()
        todoArray[todoIndex].items[indexItem].checked = !todoArray[todoIndex].items[indexItem].checked;
        TodoDataStorage._saveData(todoArray)
    }
}