const fs = require("fs")

const addToDo = argv => {
    const data = require('./todos.json');
    data.push(argv);
    fs.writeFile('./todos.json', JSON.stringify(data), err => {
        if (err) {
            console.log(err);
            return;
        }
    });
}

const remToDo = item => {
    const data = require('./todos.json');
    data.splice(data.map(obj => obj.todo).indexOf(item), 1);;
    fs.writeFile('./todos.json', JSON.stringify(data), err => {
        if (err) {
            console.log(err);
            return;
        }
    });
}

const showTodo = () => {
    const data = require('./todos.json');
    const todos = data.map(elt => elt.addTodo)
    todos.forEach(elt => console.log(elt))
}

module.exports = {
    addToDo,
    remToDo,
    showTodo
}