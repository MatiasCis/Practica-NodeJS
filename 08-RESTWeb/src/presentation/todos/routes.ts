import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";

export class TodoRoutes {

    static get routes(): Router {

        const router = Router();
        const datasource = new TodoDatasourceImpl();
        const todoRepository = new TodoRepositoryImpl( datasource)
        const todoController = new TodosController(todoRepository);

        router.get('/', todoController.getTodos.bind(todoController));
        router.get('/:id', todoController.getTodoById.bind(todoController));
        router.post('/', todoController.createTodo.bind(todoController));
        router.put('/:id', todoController.updateTodo.bind(todoController));
        router.delete('/:id', todoController.deleteTodo.bind(todoController));

        return router;
    }
}