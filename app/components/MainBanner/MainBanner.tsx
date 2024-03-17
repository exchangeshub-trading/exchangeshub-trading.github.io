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
          Crypto Trading<br/>
          and more...
        </h1>
        <div
          className='main-banner-description'
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          CryptoTrading [1]
          <br />
          CryptoTrading [2]
        </div>
      </div>
    </div>
  )
}

export default MainBanner
