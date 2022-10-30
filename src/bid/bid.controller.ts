import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Bid } from '@prisma/client';

import { BidDTO } from './bid.dto';
import { BidService } from './bid.service';


@Controller('bid')
export class BidController {

    constructor(private _bidService: BidService) { }

    @Get()
    getAllBidOfAnAuction(
        @Query('auctionId') auctionId: string
    ): Promise<Bid[]> {
        return this._bidService.getAllBidOfAnAuction(auctionId);
    }

    @Post()
    bidToAnAuction(
        @Body() bid: BidDTO
    ): Promise<Bid> {
        return this._bidService.bid(bid);
    }
    
}
