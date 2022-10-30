import { Prisma } from "@prisma/client";


export type TCorePrismaAuction = Prisma.AuctionDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
