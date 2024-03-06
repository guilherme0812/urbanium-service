/*
  Warnings:

  - Added the required column `price` to the `immobilies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "immobilies" ADD COLUMN     "neighborhood_id" INTEGER,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
