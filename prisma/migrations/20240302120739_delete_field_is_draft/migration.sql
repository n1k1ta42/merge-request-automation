/*
  Warnings:

  - You are about to drop the column `isDraft` on the `MergeRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MergeRequest" DROP COLUMN "isDraft",
ALTER COLUMN "developmentStageEndAt" DROP NOT NULL,
ALTER COLUMN "finishStageEndAt" DROP NOT NULL,
ALTER COLUMN "finishStageStartAt" DROP NOT NULL,
ALTER COLUMN "reviewStageEndAt" DROP NOT NULL,
ALTER COLUMN "reviewStageStartAt" DROP NOT NULL,
ALTER COLUMN "testingStageEndAt" DROP NOT NULL,
ALTER COLUMN "testingStageStartAt" DROP NOT NULL;
