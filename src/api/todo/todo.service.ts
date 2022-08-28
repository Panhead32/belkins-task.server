import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  private todos = [];

  getAll() {
    return this.todos;
  }

  create(todoDto: CreateTodoDto) {
    this.todos.push({
      ...todoDto,
      _id: Date.now().toString(),
    });
  }
}
