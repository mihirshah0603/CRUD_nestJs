import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    addTodos(todoTitle: string, todoDescription: string): any;
    getAllTodos(): import("./todos.model").Todos[];
    getTodo(todoId: string): {
        id: string;
        title: string;
        description: string;
    };
    updateTodo(todoId: string, todoTitle: string, description: string): any;
    n: any;
    deleteTodo(todoId: string): any;
}
