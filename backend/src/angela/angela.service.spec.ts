import { Test, TestingModule } from '@nestjs/testing';
import { AngelaService } from './angela.service';

describe('AngelaService', () => {
  let service: AngelaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AngelaService],
    }).compile();

    service = module.get<AngelaService>(AngelaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
