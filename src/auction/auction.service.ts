import { Injectable } from '@nestjs/common';
import { Auction } from '@prisma/client';

import { CorePrismaAuctionRepository } from '@core';

import { AuctionDTO } from './auction.dto';


@Injectable()
export class AuctionService {

    constructor(private _corePrismaAuctionRepository: CorePrismaAuctionRepository) { }

    async getAllAuctions() {
        return await this._corePrismaAuctionRepository.findAll();
    }

    async saveAuction(auction: AuctionDTO): Promise<Auction> {
        return this._corePrismaAuctionRepository.save(auction);
    }

}
