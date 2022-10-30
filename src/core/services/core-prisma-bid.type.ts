import { Prisma } from "@prisma/client";


export type TCorePrismaBid = Prisma.BidDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
