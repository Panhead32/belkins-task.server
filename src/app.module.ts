import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './api/todo/todo.module';
import { config } from './config/config';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot(config.mongo.url)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
