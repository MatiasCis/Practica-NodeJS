import { UpdateTodoDto } from "../../dtos";
import { TodoEntity } from "../../entities/todo.entity";
import { TodoRepository } from "../../repositories/todo.repository";


export interface UpdateTodoCaseUse{

    execute(dto:UpdateTodoDto): Promise<TodoEntity>

}


export class UpdateTodo implements UpdateTodoCaseUse{

    constructor(
        private readonly repository: TodoRepository,
    ){}

    execute(dto: UpdateTodoDto): Promise<TodoEntity> {
        return this.repository.updateById(dto);


    }
    
}