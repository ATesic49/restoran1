import type { Metadata } from 'next'
import { Spectral } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Spectral({ subsets: ['latin'], weight: ['200', '300', '400', '500', '600', '700'] })

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
        {children}
        <Footer />
      </body>
    </html>
  )
}
