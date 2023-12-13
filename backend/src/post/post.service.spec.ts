import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostService],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be an array with 2 objects, properties and values', () => {
    const serviceFind = service.findAll();
    expect(serviceFind).toHaveLength(2);
    expect(serviceFind[0]).toHaveProperty('name');
    expect(serviceFind[0]).toHaveProperty('marks');
    expect(serviceFind[0]).not.toHaveProperty('age'); // Negative test
    expect(serviceFind[0]).toEqual({
      name: "Hello",
      marks: 100
    });
  })
});
