import { Injectable } from '@nestjs/common';
import { Auction, Prisma } from '@prisma/client';

import { CorePrismaService } from './core-prisma.service';
import { TCorePrismaAuction } from './core-prisma-auction.type';

import { CoreAuctionModel } from '../models';


@Injectable()
export class CorePrismaAuctionRepository {

    private get _auction(): TCorePrismaAuction {
        return this._corePrismaService.auction;
    }

    constructor(private _corePrismaService: CorePrismaService) { }
    
    async findAll() {
        return await this._auction.findMany({ orderBy: { createdAt: Prisma.SortOrder.asc }, });
    }

    async save(data: CoreAuctionModel): Promise<Auction> {
        return await this._auction.create({ data });
    }

}
