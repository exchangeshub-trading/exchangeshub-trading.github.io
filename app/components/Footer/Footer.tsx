'use client'

import React, { useEffect } from "react"
import packageJSON from '@/package.json'
import Link from "next/link"
import AOS from "aos"
import '../../../node_modules/aos/dist/aos.css'
import ApplicationConstants from '@/app/constants/app.constants'
import DateUtility from '@/app/utilities/DateUtility'

const Footer = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-between">
            <div
              className="col-lg-3 col-sm-12 col-md-12"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-offset="0"
            >
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <h3>ExchangesHub</h3>
                </div>
                <p>
                  ExchangeHub (powered by Tech1) is a platform to automate your crypto profits via trading bots on Binance, Bitfinex, and Kraken
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-12 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-offset="0"
            >
              <div className="single-footer-widget">
                <h3>Contact Us</h3>
                <ul className="widget-info">
                  <li>
                    🇺🇦 Ukraine, Lviv
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:yyluchkiv@gmail.com">yyluchkiv@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="copyright-area"
        data-aos="fade-in"
        data-aos-delay="400"
        data-aos-duration="1200"
        data-aos-once="true"
        data-aos-offset="0"
      >
        <div className="container single-footer-widget">
          <ul className="widget-social">
            {
              ApplicationConstants.SOCIAL_ITEMS.map(socialItem => {
                if (!socialItem.hide) {
                  return (
                    <li key={socialItem.name}>
                      <a href={socialItem.href} target={ socialItem.name !== 'mail' ? '_blank' : '_self'}>
                        <i className={ `ri-${ socialItem.name }-fill` }></i>
                      </a>
                    </li>
                  )
                }
              })
            }
          </ul>
          <div className="copyright-area-content">
            © 2022 — { DateUtility.getCurrentYear() } ExchangesHub. All rights reserved | v{ packageJSON.version }
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
