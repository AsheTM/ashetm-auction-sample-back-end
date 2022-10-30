import { Injectable } from '@nestjs/common';
import { Bid, Prisma } from '@prisma/client';

import { CorePrismaService } from './core-prisma.service';
import { TCorePrismaBid } from './core-prisma-bid.type';

import { BidModel } from '../models';


@Injectable()
export class CorePrismaBidRepository {

    private get _bid(): TCorePrismaBid {
        return this._corePrismaService.bid;
    }

    constructor(private _corePrismaService: CorePrismaService) { }

    async findAllbyAuctionId(auctionId: string): Promise<Bid[]> {
        return await this._bid.findMany({
            orderBy: { amount: Prisma.SortOrder.desc }, 
            where: { auctionId }, 
        });
    }

    async create(data: BidModel): Promise<Bid> {
        return await this._bid.create({ data });
    }

}
