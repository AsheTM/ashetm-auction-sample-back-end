import { Test, TestingModule } from '@nestjs/testing';
import { CorePrismaBidRepository } from './core-prisma-bid.repository';

describe('CorePrismaBidService', () => {
  let service: CorePrismaBidRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorePrismaBidRepository],
    }).compile();

    service = module.get<CorePrismaBidRepository>(CorePrismaBidRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
