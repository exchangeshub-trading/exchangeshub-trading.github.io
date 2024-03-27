import Footer from '@/app/components/Footer/Footer'
import Showcase from '@/app/components/Showcase/Showcase'
import ShowcasesConstants from '@/app/constants/showcases.constants'
import favicon from '@/public/favicon.ico'

export const generateStaticParams = async () => ShowcasesConstants.map((showcase) => ({ slug: showcase.alt }))

export const generateMetadata = ({ params }: { params: any }) => {
  const showcase = ShowcasesConstants.find((showcase) => showcase.alt === params.slug)

  return {
    metadataBase: new URL('https://exchangeshub.trading/'),
    title: `ExchangesHub | ${ showcase?.separatePageConfigs.content?.header.title }`,
    description: showcase?.description,
    icons: favicon.src,
    twitter: {
      title: `ExchangesHub | ${ showcase?.separatePageConfigs.content?.header.title }`,
      card: 'summary_large_image',
      description: showcase?.description,
      images: [
        {
          type: "image/png",
          width: 1200,
          height: 630,
          url: showcase?.separatePageConfigs.linkPreviewSrc
        }
      ],
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      title: `ExchangesHub | ${ showcase?.separatePageConfigs.content?.header.title }`,
      description: showcase?.description,
      url: 'https://exchangeshub.trading/',
      siteName: 'exchangeshub.trading',
      images: [
        {
          type: "image/png",
          width: 1200,
          height: 630,
          url: showcase?.separatePageConfigs.linkPreviewSrc
        }
      ]
    }
  }
}

export default function ShowcasePage () {
  return (
    <>
      <main className='main'>
        <Showcase />
      </main>
      <Footer />
    </>
  )
}
