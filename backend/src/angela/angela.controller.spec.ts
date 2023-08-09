import { Test, TestingModule } from '@nestjs/testing';
import { AngelaController } from './angela.controller';
import { AngelaService } from './angela.service';

describe('AngelaController', () => {
  let controller: AngelaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AngelaController],
      providers: [AngelaService],
    }).compile();

    controller = module.get<AngelaController>(AngelaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
