import { Test, TestingModule } from '@nestjs/testing';
import { CorePrismaAuctionRepository } from './core-prisma-auction.repository';

describe('CorePrismaAuctionService', () => {
  let service: CorePrismaAuctionRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorePrismaAuctionRepository],
    }).compile();

    service = module.get<CorePrismaAuctionRepository>(CorePrismaAuctionRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
