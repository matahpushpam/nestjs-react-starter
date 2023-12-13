import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [PostService]
    }).compile();

    controller = module.get<PostController>(PostController);
    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  it('should call create', () => {
    const controllerSpy = jest.spyOn(controller, 'create').mockResolvedValue('created');
    controller.create(0);
    expect(controllerSpy).toHaveBeenCalled();
  });

  it('should call findAll', () => {
    const controllerSpy = jest.spyOn(controller, 'findAll').mockReturnValue([
      {
          name: "Hello",
          marks: 100,
      }
    ]);
    controller.findAll();
    expect(controllerSpy).toHaveBeenCalled();
  });

});
