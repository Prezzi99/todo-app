// Class for intialising todo objects
class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title,
        this.description = description, 
        this.dueDate = dueDate,
        this.priority = priority
    }

    changeName(name) {
        this.name = name;
        return name;
    }

    changeDescription(description) {
        this.description = description;
        return description;
    }

    changeDueDate(dueDate) {
        this.dueDate = dueDate;
        return dueDate;
    }
    
    changePriority(priority) {
        this.priority = priority;
    }
}

// Factory for creating projects for housing Todo Items
function Project(title) {
    let title = title;
    const todos = new Array();

    const changeTitle = newTitle => title = newTitle;

    // Add a new todo item to the front of the todos array
    const addTodo = todo => todos.unshift(todo);

    // Remove todo item from the given array index
    const removeTodo = index => todos.splice(index, 1);

    return {addTodo, removeTodo, changeTitle};
}