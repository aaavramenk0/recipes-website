import Navbar from './navbar'
import Footer from './footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

//                                   children             data type
export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
          {children}
      </main>
      <Footer />
    </>
  )
}
