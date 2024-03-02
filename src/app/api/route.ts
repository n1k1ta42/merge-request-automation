// import prisma from '@/db'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  return Response.json({ isOk: true, body: await request.json() })
}
