import type { Metadata } from 'next'
import { Montserrat, Playfair_Display, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans'
});
const _spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-mono'
});
const _playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Grubby Coin Block - Revolutionary Solana Token',
  description: 'Grubby Coin Block (GCB) - A revolutionary token on Solana integrating NFTs, music, apparel, and multiple business ventures.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_montserrat.variable} ${_spaceGrotesk.variable} ${_playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
