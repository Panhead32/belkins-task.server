import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from '../modules/todo.module';
import { config } from '../config/config';

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot(config.mongo.url)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
