import { Test, TestingModule } from '@nestjs/testing';
import { ImmobiliesService } from './immobilies.service';

describe('ImmobiliesService', () => {
  let service: ImmobiliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImmobiliesService],
    }).compile();

    service = module.get<ImmobiliesService>(ImmobiliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
