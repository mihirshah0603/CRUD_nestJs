"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const common_1 = require("@nestjs/common");
const todos_service_1 = require("./todos.service");
const swagger_1 = require("@nestjs/swagger");
let TodosController = exports.TodosController = class TodosController {
    constructor(todosService) {
        this.todosService = todosService;
    }
    addTodos(todoTitle, todoDescription) {
        const generatedId = this.todosService.insertTodo(todoTitle, todoDescription);
        return { id: generatedId };
    }
    getAllTodos() {
        return this.todosService.getAllTodos();
    }
    getTodo(todoId) {
        return this.todosService.getTodo(todoId);
    }
    updateTodo(todoId, todoTitle, description) {
        this.todosService.updateTodo(todoId, todoTitle, description);
        return null;
    }
    deleteTodo(todoId) {
        this.todosService.deleteTodo(todoId);
        return null;
    }
};
__decorate([
    (0, common_1.Post)('post'),
    (0, swagger_1.ApiOperation)({ summary: 'create a todo' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                    example: 'Task 1',
                    description: 'This is the title of the todo'
                },
                description: {
                    type: 'string',
                    example: 'This is my first nestjs application',
                    description: 'This is the description of the todo'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'added..'
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden'
    }),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], TodosController.prototype, "addTodos", null);
__decorate([
    (0, common_1.Get)('get'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Todos' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'All Todos have been fetched successfully'
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden'
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal Server Error'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getAllTodos", null);
__decorate([
    (0, common_1.Get)('search/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Search the todo' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        description: 'Enter the id',
        required: true
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'searched..'
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update the todo' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        description: 'Enter the id',
        required: true
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                title: {
                    type: 'string',
                    example: 'Task 1',
                    description: 'This is the title of the todo'
                },
                description: {
                    type: 'string',
                    example: 'This is my first nestjs application',
                    description: 'This is the description of the todo'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'updated..'
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden'
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "updateTodo", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'delete the todo' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        type: 'string',
        description: 'Enter the id',
        required: true
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'deleted..'
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodosController.prototype, "deleteTodo", null);
exports.TodosController = TodosController = __decorate([
    (0, swagger_1.ApiTags)(),
    (0, common_1.Controller)('todos'),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosController);
//# sourceMappingURL=todos.controller.js.map