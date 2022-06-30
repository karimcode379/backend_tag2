#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const { addToDo, remToDo, showTodo } = require('./functions')

if (argv.addTodo) {
    addToDo(argv)
}

if (argv.removeTodo) {
    remToDo(argv.remove)
}

if (argv.showTodo) {
    showTodo()
}