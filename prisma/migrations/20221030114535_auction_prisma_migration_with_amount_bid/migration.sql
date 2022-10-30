/*
  Warnings:

  - You are about to drop the column `objectAdress` on the `Auction` table. All the data in the column will be lost.
  - Added the required column `objectAddress` to the `Auction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Bid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auction" DROP COLUMN "objectAdress",
ADD COLUMN     "objectAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Bid" ADD COLUMN     "amount" INTEGER NOT NULL;
