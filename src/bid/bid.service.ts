import { Injectable } from '@nestjs/common';
import { Bid } from '@prisma/client';

import { CorePrismaBidRepository } from '@core';

import { BidDTO } from './bid.dto';


@Injectable()
export class BidService {

    constructor(private _corePrismaBidRepository: CorePrismaBidRepository) { }

    async getAllBidOfAnAuction(auctionId: string): Promise<Bid[]> {
        return await this._corePrismaBidRepository.findAllbyAuctionId(auctionId);
    }

    async bid(bid: BidDTO): Promise<Bid> {
        return await this._corePrismaBidRepository.create(bid);
    }

}
