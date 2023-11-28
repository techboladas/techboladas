import type { Metadata } from 'next'

import './globals.css'
import { Header } from '@/components/Header'
import { Body } from '@/components/Body/Body'

export const metadata: Metadata = {
  title: 'Tech Boladas',
  description: 'Site pessoal da tech boladas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <Header/>
      <body>{children}</body>
    </html>
  )
}
