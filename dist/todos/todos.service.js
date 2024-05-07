"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const todos_model_1 = require("./todos.model");
let TodosService = exports.TodosService = class TodosService {
    constructor() {
        this.todos = [];
    }
    insertTodo(title, description) {
        const todoId = new Date().toString();
        const newTodo = new todos_model_1.Todos(todoId, title, description);
        this.todos.push(newTodo);
        return todoId;
    }
    getAllTodos() {
        return [...this.todos];
    }
    getTodo(todoId) {
        const todo = this.todos.find((todo) => todo.id === todoId);
        if (!todo) {
            throw new common_1.NotFoundException("Data not found!");
        }
        return Object.assign({}, todo);
    }
    updateTodo(todoId, title, description) {
        const todo = this.todos.find((todo) => todo.id === todoId);
        if (!todo) {
            throw new common_1.NotFoundException("Data not found!");
        }
        todo.title = title;
        todo.description = description;
        return Object.assign({}, todo);
    }
    deleteTodo(todoId) {
        const todo = this.todos.find((todo) => todo.id === todoId);
        if (!todo) {
            throw new common_1.NotFoundException("Data not found!");
        }
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
};
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map