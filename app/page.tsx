import Script from "next/script";
import HomeConstants from '@/app/constants/home.constants'
import MainBanner from '@/app/components/MainBanner/MainBanner'
import Cases from '@/app/components/Swipers/SwiperCases/Cases/Cases'
import Services from '@/app/components/Services/Services'
import Testimonials from '@/app/components/Testimonials/Testimonials'
import Footer from '@/app/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <main className='main'>
        <div className='home'>
          {
            HomeConstants.mainBannerPresent &&
            <MainBanner />
          }
          {
            HomeConstants.casesPresent &&
            <div id='showcases'>
              <Cases />
            </div>
          }
          {
            HomeConstants.servicesPresent &&
            <div id='services'>
              <Services />
            </div>
          }
          {
            HomeConstants.testimonialsPresent &&
            <div id='testimonials'>
              <Testimonials />
            </div>
          }
        </div>


        {/*Google Analytics*/}
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-4L5JR7N4LB" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4L5JR7N4LB');
          `}
          </Script>
        </div>
      </main>
      <Footer />
    </>
  )
}
