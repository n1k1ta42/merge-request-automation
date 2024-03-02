import prisma from '@/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json()
  if (data.object_attributes.action === 'open') {
    const newMergeRequest = await prisma.mergeRequest.create({
      data: {
        status: 'development',
        authorId: parseInt(data.author.id),
        authorName: data.author.name,
        authorUsername: data.author.username,
        repositoryName: data.repository.name,
        repositoryHomepage: data.repository.homepage,
        targetBranch: data.object_attributes.target_branch,
        lastAtion: data.object_attributes.action,
        state: data.object_attributes.state,
        developmentStageStartAt: Date.now().toString(),
      },
    })
    await fetch(
      `https://git.yamal-media.ru/api/v4/projects/${data.object_attributes.target_project_id}/merge_requests/${data.object_attributes.iid}`,
      {
        method: 'PUT',
        headers: {
          'PRIVATE-TOKEN': process.env.GIT_LAB_TOKEN ?? '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `Draft: ${data.object_attributes.title}`,
        }),
      },
    )
  }
  return Response.json({ isOk: true })
}
