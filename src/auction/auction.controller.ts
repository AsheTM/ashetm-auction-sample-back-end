import { Body, Controller, Get, Post } from '@nestjs/common';
import { Auction } from '@prisma/client';

import { AuctionDTO } from './auction.dto';
import { AuctionService } from './auction.service';


@Controller('auction')
export class AuctionController {

    constructor(private _auctionService: AuctionService) { }

    @Get()
    getAllAuctions(): Promise<Auction[]> {
        return this._auctionService.getAllAuctions();
    }

    @Post()
    createAuction(
        @Body() auction: AuctionDTO
    ): Promise<Auction> {
        return this._auctionService.saveAuction(auction);
    }

}
