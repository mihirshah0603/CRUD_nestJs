import { Todos } from './todos.model';
export declare class TodosService {
    private todos;
    insertTodo(title: string, description: string): string;
    getAllTodos(): Todos[];
    getTodo(todoId: string): {
        id: string;
        title: string;
        description: string;
    };
    updateTodo(todoId: string, title: string, description: string): {
        id: string;
        title: string;
        description: string;
    };
    deleteTodo(todoId: string): void;
}
