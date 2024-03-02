import prisma from '@/db'
import { format } from '@formkit/tempo'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'
import { dateDifferenceReadable } from '@/lib/dateDiff'

export const dynamic = 'force-dynamic'

async function getData() {
  return prisma.mergeRequest.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  })
}

export default async function Page() {
  const data = await getData()

  return (
    <main className='flex flex-col space-y-4 p-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>№MR</TableHead>
            <TableHead>Разработка</TableHead>
            <TableHead>Код ревью</TableHead>
            <TableHead>Тетсирование</TableHead>
            <TableHead>Финиш</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(item => (
            <TableRow>
              <TableCell>
                <Button variant='link' asChild>
                  <Link
                    href={item.url}
                    target='_blank'
                    className='text-blue-500 font-bold'
                  >
                    {item.iid}
                  </Link>
                </Button>
              </TableCell>
              <TableCell>
                <div>
                  <div className='font-bold'>
                    {dateDifferenceReadable(
                      item.developmentAt.toISOString(),
                      item.reviewAt?.toISOString(),
                    )}
                  </div>
                  <div className='text-xs'>
                    <p>
                      Начало:{' '}
                      {format(item.developmentAt, { date: 'medium' }, 'ru')}
                    </p>
                    {item.reviewAt && (
                      <p>
                        Начало:{' '}
                        {format(item.reviewAt, { date: 'medium' }, 'ru')}
                      </p>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className='font-bold'>
                    {item.reviewAt &&
                      dateDifferenceReadable(
                        item.reviewAt.toISOString(),
                        item.testingAt?.toISOString(),
                      )}
                  </div>
                  <div className='text-xs'>
                    {item.reviewAt && (
                      <p>
                        Начало:{' '}
                        {format(item.reviewAt, { date: 'medium' }, 'ru')}
                      </p>
                    )}
                    {item.testingAt && (
                      <p>
                        Начало:{' '}
                        {format(item.testingAt, { date: 'medium' }, 'ru')}
                      </p>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className='font-bold'>
                    {item.testingAt &&
                      dateDifferenceReadable(
                        item.testingAt.toISOString(),
                        item.finishAt?.toISOString(),
                      )}
                  </div>
                  <div className='text-xs'>
                    {item.testingAt && (
                      <p>
                        Начало:{' '}
                        {format(item.testingAt, { date: 'medium' }, 'ru')}
                      </p>
                    )}
                    {item.finishAt && (
                      <p>
                        Начало:{' '}
                        {format(item.finishAt, { date: 'medium' }, 'ru')}
                      </p>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className='font-bold'>
                  {item.finishAt
                    ? format(item.finishAt, { date: 'medium' }, 'ru')
                    : '-'}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
