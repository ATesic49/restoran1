import type { Metadata } from 'next'
import { Spectral } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Spectral({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata: Metadata = {
  title: 'Restoran #1',
  description: 'Najbolji restoran u gradu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
