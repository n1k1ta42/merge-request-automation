/*
  Warnings:

  - You are about to drop the column `lastAtion` on the `MergeRequest` table. All the data in the column will be lost.
  - Added the required column `lastAction` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MergeRequest" DROP COLUMN "lastAtion",
ADD COLUMN     "lastAction" "Action" NOT NULL;
