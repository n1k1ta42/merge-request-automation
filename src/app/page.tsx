import prisma from '@/db'
import { format } from '@formkit/tempo'

export const dynamic = 'force-dynamic'

async function getData() {
  return prisma.mergeRequest.findMany()
}

export default async function Page() {
  const data = await getData()

  return (
    <main className='flex flex-col space-y-4 p-4'>
      {data.map(item => (
        <div key={item.id} className='grid grid-cols-5 gap-x-2 border p-4'>
          <div className='break-words'>{item.url}</div>
          <div className='break-words'>
            {format(item.developmentAt, { date: 'full', time: 'short' }, 'ru')}
          </div>
          <div className='break-words'>
            {item.reviewAt
              ? format(item.reviewAt, { date: 'full', time: 'short' }, 'ru')
              : 'Этап не начат'}
          </div>
          <div className='break-words'>
            {item.testingAt
              ? format(item.testingAt, { date: 'full', time: 'short' }, 'ru')
              : 'Этап не начат'}
          </div>
          <div className='break-words'>
            {item.finishAt
              ? format(item.finishAt, { date: 'full', time: 'short' }, 'ru')
              : 'Этап не начат'}
          </div>
        </div>
      ))}
    </main>
  )
}
