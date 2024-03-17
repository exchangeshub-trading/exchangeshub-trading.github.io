'use client'

import { hasCookie, setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import CookiesIcon from '@/public/assets/svgs/CookieConsent/cookies.svg'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true)
  const cookieName = 'cookiesAccepted'

  useEffect(() => {
    setShowConsent(hasCookie(cookieName))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie(cookieName, 'true', {})
  }

  if (showConsent) {
    return null
  }

  return (
    <div
      className='cookie-consent'
      data-aos="fade-up"
      data-aos-delay="2000"
      data-aos-offset="0"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className='cookie-consent-wrapper'>
        <div className='cookie-consent-content'>
          <Image src={ CookiesIcon } alt='cookies-icon' height={ 30 } />
          <span className='cookie-consent-text'>
            This website uses cookies to improve user experience.
          </span>
        </div>
        <button className='cookie-consent-accept-button default-btn' onClick={ () => acceptCookie() }>
          Accept
          <span></span>
        </button>
      </div>
    </div>
  )
}

export default CookieConsent