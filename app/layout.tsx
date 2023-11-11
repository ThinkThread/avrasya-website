import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import HeaderContainer from '@/components/HeaderContainer'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  readonly children: React.ReactNode
}

export default function RootLayout({
  children,
}: Props) {

  return (
    <html lang="en">
      <head>
        <title>Avrasya Web Framework</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Avrasya is a fast and unique Node.js web framework designed for building web applications and APIs. Avrasya stands out with its simple usage, performance, and extensibility." />
        <meta name="keywords" content="avrasya, web, framework, nodejs, javascript, typescript, react, nextjs, fast, unique, simple, performance, extensibility" />
        <meta name="author" content="Muhtalip Dede" />
        <meta name="theme-color" content="#000000" />
        <meta name="og:title" content="Avrasya Web Framework" />
        <meta name="og:description" content="Avrasya is a fast and unique Node.js web framework designed for building web applications and APIs. Avrasya stands out with its simple usage, performance, and extensibility." />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://avrasya.fly.dev" />
        <meta name="og:site_name" content="Avrasya Web Framework" />
        <meta name="og:image" content="https://avrasya.fly.dev/avrasya.png" />
        <meta name="publish_date" content="2023-11-11" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <HeaderContainer />
        {children}
      </body>
    </html>
  )
}
