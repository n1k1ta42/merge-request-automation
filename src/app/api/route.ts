export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  return Response.json(await request.json())
}
