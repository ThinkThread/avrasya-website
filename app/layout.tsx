import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import HeaderContainer from '@/components/HeaderContainer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Avrasya Web Framework</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Avrasya Web Framework" />
        <meta name="keywords" content="Avrasya, Web, Framework, React, Next, Tailwind, TypeScript" />
        <meta name="author" content="Muhtalip Dede" />
        <meta name="theme-color" content="#000000" />
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
