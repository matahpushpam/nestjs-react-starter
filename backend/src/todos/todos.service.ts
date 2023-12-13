import { Injectable } from '@nestjs/common';
import axios, { Axios } from 'axios';

@Injectable()
export class TodosService {
    async getTodos() {
        try {
            let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return result.data;
        } catch (err) {
            return err;
        }
    }
}
