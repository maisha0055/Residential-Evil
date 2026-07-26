import type { Metadata } from 'next'
import { Inter, Creepster } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const creepster = Creepster({ weight: '400', subsets: ['latin'], variable: '--font-creepster' })

export const metadata: Metadata = {
  title: 'Residential Evil - Surviving is challenging if your gaze drifts',
  description: 'Residential Evil is a survival horror game. Download now and face the darkness. Can you survive?',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${creepster.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
