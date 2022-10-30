import { Module } from '@nestjs/common';

import { AuctionModule } from './auction';
import { BidModule } from './bid';
import { CoreModule } from './core';


@Module({
  imports: [
    AuctionModule, 
    CoreModule.forRoot(), 
    BidModule, 
  ], 
})
export class AppModule { }
