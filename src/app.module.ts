import { Module } from '@nestjs/common';
import { AppController } from './api/app/app.controller';
import { AppService } from './api/app/app.service';
import { TodoController } from './api/todo/todo.controller';
import { TodoService } from './api/todo/todo.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
