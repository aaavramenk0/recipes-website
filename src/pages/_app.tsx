// These styles apply to every route in the application
import '@/styles/globals.css'
import RootLayout from '../components/layout'
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}