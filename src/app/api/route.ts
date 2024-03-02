// import prisma from '@/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json()
  if (data.object_attributes.action === 'open') {
    await fetch(
      `https://git.yamal-media.ru/api/v4/projects/${data.object_attributes.target_project_id}/merge_requests${data.object_attributes.iid}`,
      {
        method: 'PUT',
        headers: {
          'PRIVATE-TOKEN': process.env.GIT_LAB_TOKEN ?? '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewer_ids: [3],
        }),
        // body: JSON.stringify({
        //   title: 'Draft: Тест',
        // }),
      },
    )
  }
  return Response.json({ isOk: true })
}
