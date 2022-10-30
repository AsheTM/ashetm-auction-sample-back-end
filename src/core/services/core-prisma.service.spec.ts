import { Test, TestingModule } from '@nestjs/testing';
import { CorePrismaService } from './core-prisma.service';

describe('CorePrismaService', () => {
  let service: CorePrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorePrismaService],
    }).compile();

    service = module.get<CorePrismaService>(CorePrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
