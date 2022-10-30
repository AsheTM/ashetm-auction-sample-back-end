/*
  Warnings:

  - You are about to drop the column `days` on the `Auction` table. All the data in the column will be lost.
  - Added the required column `hours` to the `Auction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auction" DROP COLUMN "days",
ADD COLUMN     "hours" INTEGER NOT NULL;
