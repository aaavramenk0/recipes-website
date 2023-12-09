import Navbar from './navbar'
import Footer from './footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/* export const metadata: Metadata = {
    title: 'Website with recipes from every cousine',
    description: 'Created by Oleksandr Avramenko for WDD 430 individual project',
} */ 
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
