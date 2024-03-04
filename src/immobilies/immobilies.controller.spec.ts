import { Test, TestingModule } from '@nestjs/testing';
import { ImmobiliesController } from './immobilies.controller';
import { ImmobiliesService } from './immobilies.service';

describe('ImmobiliesController', () => {
  let controller: ImmobiliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmobiliesController],
      providers: [ImmobiliesService],
    }).compile();

    controller = module.get<ImmobiliesController>(ImmobiliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
