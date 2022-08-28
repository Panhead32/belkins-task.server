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
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAll() {
    return this.todoService.getAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `delete id: ${id}`;
  }

  @Put(':id')
  edit(@Body() updateTodoDto: UpdateTodoDto, @Param('id') id: string) {
    return `create todo - Title: ${updateTodoDto.title}, done: ${updateTodoDto.done}`;
  }
}
