'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import '../../../node_modules/aos/dist/aos.css'

const MainBanner = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='main-banner'>
      <div className='container'>
        <h1
          className='main-banner-title'
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          CryptoTrading Bots
          {/*<br/>and more...*/}
        </h1>
        <div
          className='main-banner-description'
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Trade simultaneously on Binance, Bitfinex, and Kraken
          <br />
          Utilize pre-built established bots or create custom ones to suit your needs
        </div>
      </div>
    </div>
  )
}

export default MainBanner
