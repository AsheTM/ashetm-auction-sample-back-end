import { Global, Inject, Module } from '@nestjs/common';

import { ECoreProvider } from './core.enum';
import { CORE_TOKEN_CONFIGURATION } from './core.token';

import { CorePrismaAuctionRepository, CorePrismaBidRepository, CorePrismaService } from './services';


@Global()
@Module({
    providers: [
        CorePrismaAuctionRepository, 
        CorePrismaBidRepository, 
        CorePrismaService, 
    ], 
    exports: [
        CorePrismaAuctionRepository, 
        CorePrismaBidRepository, 
    ], 
})
export class CoreRootModule {

    constructor(
        @Inject(CORE_TOKEN_CONFIGURATION) 
            private _coreTokenConfiguration: ECoreProvider
    ) {
        if(_coreTokenConfiguration === ECoreProvider.NO_ROOT_STATIC_METHOD_INVOKED) {
            throw new Error('Call CoreModule.forRoot static method instead, and do not import CoreRootModule directly!');
        }
    }

}
