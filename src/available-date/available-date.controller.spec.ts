import { Test, TestingModule } from '@nestjs/testing';
import { AvailableDateController } from './available-date.controller';
import { AvailableDateService } from './available-date.service';

describe('AvailableDateController', () => {
  let controller: AvailableDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailableDateController],
      providers: [AvailableDateService],
    }).compile();

    controller = module.get<AvailableDateController>(AvailableDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
