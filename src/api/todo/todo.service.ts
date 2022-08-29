import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from '../../models/create-todo.dto';
import { UpdateTodoDto } from '../../models/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {
  }

  async getAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new this.todoModel(todoDto)
    return newTodo.save()
  }

  async remove(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndRemove(id)
  }

  async update(id: string, todoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, todoDto, { new: true })
  }
}
