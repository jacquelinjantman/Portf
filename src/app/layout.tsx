import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jacquelin Jantman — Fullstack Developer',
  description: 'Portfolio de Jacquelin Jantman, desarrolladora fullstack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}