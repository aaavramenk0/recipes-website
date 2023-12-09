// These styles apply to every route in the application
import '@/styles/globals.css'
import RootLayout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import recipe16 from '../icons/recipe16.png'
import Link from 'next/link'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Recipes website</title>
        <meta charSet="utf-8" />
        <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <RootLayout>
      <Component {...pageProps} />
      </RootLayout>
      </>
  )
}