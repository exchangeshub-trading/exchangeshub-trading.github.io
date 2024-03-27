import './styles/index.scss'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import favicon from '@/public/favicon.ico'
import Header from '@/app/components/Header/Header'
import CookieConsent from '@/app/components/CookieConsent/CookieConsent'
import HomePreviewImage from '@/public/assets/pngs/Previews/home.png'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://exchangeshub.trading/'),
  title: 'ExchangesHub | CryptoTrading Bots',
  description: 'Trade simultaneously on Binance, Bitfinex, and Kraken. Utilize pre-built established bots or create custom ones to suit your needs',
  icons: favicon.src,
  twitter: {
    title: 'ExchangesHub | CryptoTrading Bots',
    card: 'summary_large_image',
    description: 'Trade simultaneously on Binance, Bitfinex, and Kraken. Utilize pre-built established bots or create custom ones to suit your needs',
    images: [
      {
        type: "image/png",
        width: 1200,
        height: 630,
        url: HomePreviewImage.src
      }
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'ExchangesHub | CryptoTrading Bots',
    description: 'Trade simultaneously on Binance, Bitfinex, and Kraken. Utilize pre-built established bots or create custom ones to suit your needs',
    url: 'https://exchangeshub.trading/',
    siteName: 'exchangeshub.trading',
    images: [
      {
        type: "image/png",
        width: 1200,
        height: 630,
        url: HomePreviewImage.src
      }
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel="shortcut icon" href={ favicon.src } type="image/x-icon" />
      </head>
      <body className={ jost.className }>
        <header>
          <Header />
        </header>
        { children }
        <CookieConsent />
      </body>
    </html>
  )
}
