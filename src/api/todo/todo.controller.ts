import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CreateTodoDto } from '../../models/create-todo.dto';
import { UpdateTodoDto } from '../../models/update-todo.dto';
import { Todo } from './schemas/todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll(): Promise<Todo[]> {
    return this.todoService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Todo> {
    return this.todoService.remove(id)
  }

  @Put(':id')
  edit(@Body() updateTodoDto: UpdateTodoDto, @Param('id') id: string): Promise<Todo> {
    return this.todoService.update(id, updateTodoDto)
  }
}
