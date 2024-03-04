import type { Metadata } from 'next'
import ClientLayout from './clientlayout'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'A Cap Collectif technical test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
