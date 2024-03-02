// import prisma from '@/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const data = await request.json()
  if (data.object_attributes.action === 'open') {
    await fetch(
      `https://git.yamal-media.ru/api/v4/projects/${data.project.id}/merge_requests${data.object_attributes.iid}`,
      {
        method: 'POST',
        headers: {
          'PRIVATE-TOKEN': process.env.GIT_LAB_TOKEN ?? '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'DRAFT' + ' ' + data.data.object_attributes.title,
        }),
      },
    )
  }
  return Response.json({ isOk: true, body: await request.json() })
}
