import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class CorePrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

    async onModuleDestroy() {
        await super.$disconnect();
    }
    
    async onModuleInit() {
        await super.$connect();
    }

}
