import prisma from '@/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const newMr = await prisma.mergeRequest.create({ data: {} })
  return Response.json(newMr)
}
