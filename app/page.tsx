import Script from "next/script";
import HomeConstants from '@/app/constants/home.constants'
import MainBanner from '@/app/components/MainBanner/MainBanner'
import Cases from '@/app/components/Swipers/SwiperCases/Cases/Cases'
import Services from '@/app/components/Services/Services'
import Testimonials from '@/app/components/Testimonials/Testimonials'
import LaunchSoonSubscribe from '@/app/components/LaunchSoonSubscribe/LaunchSoonSubscribe'
import Footer from '@/app/components/Footer/Footer'
import Pricing from "./components/Pricing/Pricing";


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
            HomeConstants.testimonialsPresent &&
            <div id='testimonials'>
              <Testimonials />
            </div>
          }
          {
            HomeConstants.launchSoonSubscribe &&
            <div id='launchsoonsubscribe'>
              <LaunchSoonSubscribe />
            </div>
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
            HomeConstants.servicesPresent &&
            <div id='pricing'>
              <Pricing />
            </div>
          }
          {
            HomeConstants.launchSoonSubscribe &&
            <div id='launchsoonsubscribe'>
              <LaunchSoonSubscribe />
            </div>
          }
        </div>


        {/*Google Analytics*/}
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-9PHRR8H1EM" />
          <Script id="google-analytics">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-9PHRR8H1EM');
          `}
          </Script>
        </div>
      </main>
      <Footer />
      <Script src="https://www.google.com/recaptcha/api.js" />
    </>
  )
}
