import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private postService: PostService) {

    }

    @Post()
    create(@Body() createPost: any): any {
        return 'created';
    }

    @Get()
    findAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.postService.findOne(id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return 'deleted';
    }
}
