import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from '../schemas/todo.schema';
import { TodoController } from '../api/todo.controller';
import { TodoService } from '../services/todo.service';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema
      }
    ])
  ]
})
export class TodoModule {}
