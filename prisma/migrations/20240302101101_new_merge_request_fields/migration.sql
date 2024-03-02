/*
  Warnings:

  - Added the required column `authorId` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorName` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorUsername` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDraft` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastAtion` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repositoryHomepage` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repositoryName` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetBranch` to the `MergeRequest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MergeRequestStatus" AS ENUM ('development', 'review', 'testing', 'finish');

-- CreateEnum
CREATE TYPE "Action" AS ENUM ('open', 'close', 'reopen', 'update', 'approved', 'unapproved', 'approval', 'unapproval', 'merge');

-- AlterTable
ALTER TABLE "MergeRequest" ADD COLUMN     "assigneeIds" INTEGER[],
ADD COLUMN     "authorId" INTEGER NOT NULL,
ADD COLUMN     "authorName" TEXT NOT NULL,
ADD COLUMN     "authorUsername" TEXT NOT NULL,
ADD COLUMN     "isDraft" BOOLEAN NOT NULL,
ADD COLUMN     "labels" TEXT[],
ADD COLUMN     "lastAtion" "Action" NOT NULL,
ADD COLUMN     "repositoryHomepage" TEXT NOT NULL,
ADD COLUMN     "repositoryName" TEXT NOT NULL,
ADD COLUMN     "reviewerIds" INTEGER[],
ADD COLUMN     "state" "Action" NOT NULL,
ADD COLUMN     "status" "MergeRequestStatus" NOT NULL DEFAULT 'development',
ADD COLUMN     "targetBranch" TEXT NOT NULL;
