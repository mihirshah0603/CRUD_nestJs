# NestJS Todo API

This repository contains a simple Todo API built with NestJS framework. It provides CRUD operations for managing todo items.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Features

- Add new todo items
- Retrieve all todo items
- Retrieve a single todo item by ID
- Update a todo item
- Delete a todo item

## Support

NestJS Todo API is an MIT-licensed open source project. If you encounter any issues or have questions, feel free to raise an issue on GitHub.

## License

NestJS Todo API is [MIT licensed](LICENSE).
```

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todos } from './todos.model';

@Injectable() 
export class TodosService {
    private todos: Todos[] = [];

    insertTodo(title: string, description: string) {
        const todoId = new Date().toString();
        const newTodo = new Todos(todoId, title, description);
        this.todos.push(newTodo);
        return todoId;
    }

    getAllTodos() {
        return [...this.todos];
    }

    getTodo(todoId: string) {
        const todo = this.todos.find(todo => todo.id === todoId);
        if (!todo) {
            throw new NotFoundException('Data not found!');
        }
        return { ...todo };
    }

    updateTodo(todoId: string, title: string, description: string) {
        const todo = this.todos.find(todo => todo.id === todoId);
        if (!todo) {
            throw new NotFoundException('Data not found!');
        }
        todo.title = title;
        todo.description = description;
        return { ...todo };
    }

    deleteTodo(todoId: string) {
        const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex === -1) {
            throw new NotFoundException('Data not found!');
        }
        this.todos.splice(todoIndex, 1);
    }
}
```
