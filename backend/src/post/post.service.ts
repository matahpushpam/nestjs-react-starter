import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    constructor() {

    }

    findAll() {
        return [
            {
                name: "Hello",
                marks: 100,
            },
            {
                name: "Hello1",
                marks: 50,
            }
        ]
    }

    findOne(id: string) {
        return {
            name: 'Hello',
            marks: id
        }   
    }
}
