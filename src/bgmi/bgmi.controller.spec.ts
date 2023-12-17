import { Test, TestingModule } from '@nestjs/testing';
import { BgmiController } from './bgmi.controller';

describe('BgmiController', () => {
  let controller: BgmiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BgmiController],
    }).compile();

    controller = module.get<BgmiController>(BgmiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
