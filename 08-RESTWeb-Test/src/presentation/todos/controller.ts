import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo-dto";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto";



export class TodosController {

    //* DI
    constructor() {}

    public getTodos = async(req: Request, res: Response ) => {
            const todos = await prisma.todo.findMany()
            res.json(todos);
        }


    public getTodoById = async(req: Request, res: Response) => {
        const id = +req.params.id;
        if ( isNaN(id) ) res.status(400).json({error: 'ID argument is not a number'})

        const todo = await prisma.todo.findFirst({
            where: {id}
        });

        ( todo ) 
        ? res.json(todo)
        : res.status(404).json({ error: `TODO with id ${id} not found`});
    }

    public createTodo = async( req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body)
        if ( error ) res.status(400).json({ error });

        const todo = await prisma.todo.create({
            data: createTodoDto!
        })
      
        res.json(todo)
    }

    public updateTodo = async( req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({...req.body, id});
        if ( error ) res.status(400).json({ error });

        const todo = await prisma.todo.findFirst({
            where: { id }
          });
        
        if ( !todo ) {
            res.status(404).json( `Todo with id ${id} not found` );
            return;
        }

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: updateTodoDto!.values
          });

        res.json( updatedTodo );

    };

    public deleteTodo = async(req:Request, res: Response) => {
        const id = +req.params.id;
    
        const todo = await prisma.todo.findFirst({
            where: {id}
        });
        if ( !todo ) {
            res.status(404).json( `Todo with id ${id} not found` );
            return;
        }
        

        const deleted = await prisma.todo.delete({
            where: {id}
        });

        ( deleted )
        ? res.json( deleted )
        : res.status(400).json({ error: `Todo with ${ id } not found `})

        res.json( {todo, deleted} );
    
      }


}
    
    


