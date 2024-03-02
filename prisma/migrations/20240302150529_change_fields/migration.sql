/*
  Warnings:

  - You are about to drop the column `assigneeIds` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `authorName` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `authorUsername` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `developmentStageEndAt` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `developmentStageStartAt` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `finishStageEndAt` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `finishStageStartAt` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `labels` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `repositoryHomepage` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `repositoryName` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `reviewStageEndAt` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `reviewStageStartAt` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `reviewerIds` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `targetBranch` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `testingStageEndAt` on the `MergeRequest` table. All the data in the column will be lost.
  - You are about to drop the column `testingStageStartAt` on the `MergeRequest` table. All the data in the column will be lost.
  - Added the required column `developmentAt` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `iid` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MergeRequest" DROP COLUMN "assigneeIds",
DROP COLUMN "authorId",
DROP COLUMN "authorName",
DROP COLUMN "authorUsername",
DROP COLUMN "developmentStageEndAt",
DROP COLUMN "developmentStageStartAt",
DROP COLUMN "finishStageEndAt",
DROP COLUMN "finishStageStartAt",
DROP COLUMN "labels",
DROP COLUMN "repositoryHomepage",
DROP COLUMN "repositoryName",
DROP COLUMN "reviewStageEndAt",
DROP COLUMN "reviewStageStartAt",
DROP COLUMN "reviewerIds",
DROP COLUMN "status",
DROP COLUMN "targetBranch",
DROP COLUMN "testingStageEndAt",
DROP COLUMN "testingStageStartAt",
ADD COLUMN     "developmentAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "finishAt" TIMESTAMP(3),
ADD COLUMN     "iid" INTEGER NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL,
ADD COLUMN     "reviewAt" TIMESTAMP(3),
ADD COLUMN     "testingAt" TIMESTAMP(3),
ADD COLUMN     "url" TEXT NOT NULL;

-- DropEnum
DROP TYPE "MergeRequestStatus";
