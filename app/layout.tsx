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
  title: 'ExchangesHub | CryptoTrading',
  description: 'Tech1 is a software development team with 20+ accomplished projects since 2016',
  icons: favicon.src,
  twitter: {
    title: 'ExchangesHub | CryptoTrading',
    card: 'summary_large_image',
    description: 'Tech1 is a software development team with 20+ accomplished projects since 2016',
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
    title: 'ExchangesHub | CryptoTrading',
    description: 'Tech1 is a software development team with 20+ accomplished projects since 2016',
    url: 'https://tech1.io/',
    siteName: 'tech1.io',
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
