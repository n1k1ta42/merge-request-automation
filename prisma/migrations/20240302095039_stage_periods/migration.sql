/*
  Warnings:

  - Added the required column `developmentStageEndAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `developmentStageStartAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finishStageEndAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finishStageStartAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviewStageEndAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reviewStageStartAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testingStageEndAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testingStageStartAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MergeRequest" ADD COLUMN     "developmentStageEndAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "developmentStageStartAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "finishStageEndAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "finishStageStartAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reviewStageEndAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reviewStageStartAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "testingStageEndAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "testingStageStartAt" TIMESTAMP(3) NOT NULL;
