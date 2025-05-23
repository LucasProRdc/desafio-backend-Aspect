/*
  Warnings:

  - Added the required column `isAvailable` to the `AvailableData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableData" ADD COLUMN     "isAvailable" BOOLEAN NOT NULL;
