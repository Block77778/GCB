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
  title: 'Grubby Coin Block - Revolutionary Ethereum Token',
  description: 'Grubby Coin Block (GCB) - A revolutionary token on Ethereum integrating NFTs, music, apparel, and multiple business ventures. Join our ecosystem today.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
