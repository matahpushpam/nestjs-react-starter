import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [PostsModule, TodosModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
