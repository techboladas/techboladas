import type { Metadata } from 'next'

import './globals.css'
import { NavBar } from '@/components/NavBar'

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
      <body>
      <NavBar />
      {children}
      </body>
    </html>
  )
}
