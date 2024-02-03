import type { Metadata } from 'next'
import { Poppins as myFont } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const font = myFont({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '700', '900'] })

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
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
