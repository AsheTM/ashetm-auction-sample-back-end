import { DynamicModule, Module } from '@nestjs/common';

import { CoreRootModule } from './core-root.module';
import { ECoreProvider } from './core.enum';
import { CORE_TOKEN_CONFIGURATION } from './core.token';


@Module({
    providers: [{
        provide: CORE_TOKEN_CONFIGURATION, 
        useValue: ECoreProvider.NO_ROOT_STATIC_METHOD_INVOKED
    }]
})
export class CoreModule {

    constructor() {
        throw new Error('Call CoreModule.forRoot static method and not import directly CoreModule!');
    }

    static forRoot(): DynamicModule {
        return {
            module: CoreRootModule, 
            providers: [{
                provide: CORE_TOKEN_CONFIGURATION, 
                useValue: ECoreProvider.FOR_ROOT
            }]
        };
    }
}
