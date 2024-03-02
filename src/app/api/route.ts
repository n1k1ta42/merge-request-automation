import prisma from '@/db'
import { api } from '@/instanse'

export const dynamic = 'force-dynamic'

const getUpdateMrApiUrl = (projectId: string, iid: string) =>
  `${process.env.GIT_LAB_API_URL}/projects/${projectId}/merge_requests/${iid}`

export async function POST(request: Request) {
  const data = await request.json()

  if (data.object_attributes.action === 'open') {
    await prisma.mergeRequest.create({
      data: {
        projectId: data.object_attributes.target_project_id,
        iid: data.object_attributes.iid,
        url: data.object_attributes.url,
        lastAction: data.object_attributes.action,
        developmentAt: new Date(),
      },
    })
    await api.put(
      getUpdateMrApiUrl(
        data.object_attributes.target_project_id,
        data.object_attributes.iid,
      ),
      JSON.stringify({
        title: `Draft: ${data.object_attributes.title}`,
      }),
    )
  }

  if (
    data.object_attributes.action === 'update' &&
    !data.object_attributes.title.startsWith('Draft:')
  ) {
    const mergeRequest = await prisma.mergeRequest.findFirst({
      where: {
        AND: [
          {
            projectId: data.object_attributes.target_project_id,
          },
          {
            iid: data.object_attributes.iid,
          },
        ],
      },
    })

    if (mergeRequest) {
      await prisma.mergeRequest.update({
        where: {
          id: mergeRequest.id,
        },
        data: {
          reviewAt: new Date(),
        },
      })
    }

    await api.put(
      getUpdateMrApiUrl(
        data.object_attributes.target_project_id,
        data.object_attributes.iid,
      ),
      JSON.stringify({
        reviewer_ids: [3],
      }),
    )
  }
  return Response.json({ isOk: true })
}
