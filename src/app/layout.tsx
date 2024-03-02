import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'MR автоматизация',
  description: 'Автоматизация merge request life cyrcle',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='ru'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiasing',
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
