import { Router } from "express";
import { TodosController } from "./controller";

export class TodoRoutes {

    static get routes(): Router {

        const router = Router();
        const todoController = new TodosController();

        router.get('/', todoController.getTodos.bind(todoController));
        router.get('/:id', todoController.getTodoById.bind(todoController));
        router.post('/', todoController.createTodo.bind(todoController));
        router.put('/:id', todoController.updateTodo.bind(todoController));
        router.delete('/:id', todoController.deleteTodo.bind(todoController));

        return router;
    }
}