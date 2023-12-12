// These styles apply to every route in the application
import '@/styles/globals.css'
import RootLayout from '../components/layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextUIProvider } from '@nextui-org/react'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Head>
        <title>Recipes website</title>
          <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextUIProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </NextUIProvider>
    </>
  )
}