import type { AppProps } from "next/app"

import Layout from "@/components/layout"

import "@/styles/globals.css"

import { Inter as FontSans, Playfair_Display } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-serif: ${fontSerif.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
