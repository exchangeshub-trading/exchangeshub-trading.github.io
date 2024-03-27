'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import parse from 'html-react-parser'
import ServicesTypes from '@/app/types/ServicesTypes'
import ServicesConstants from '@/app/constants/services.constants'

const ServicesDesktop: React.FC<{ getListItemCssClass: (serviceType: ServicesTypes, activeItem: ServicesTypes ) => string }> = ({ getListItemCssClass }) => {
  const [activeItem, setActiveItem] = useState<ServicesTypes>('exchanges-support')

  return (
    <div className='services-conteiner'>
      <ul className='services-list'>
        {
          ServicesConstants.map((service, index) => {
            return (
              <li
                key={ index }
                data-aos='fade-right'
                data-aos-delay={ 200 + (100 * (index + 1)) }
                data-aos-duration='1200'
                data-aos-once='true'
              >
                <span className={ getListItemCssClass(service.type, activeItem) } onClick={ () => setActiveItem(service.type) }>
                  { service.titleShort }
                </span>
              </li>
            )
          })
        }
      </ul>
      {
        ServicesConstants.map((service, index) => {
          return (
            activeItem === service.type &&
            <div className='services-content' key={ index }>
              <h3
                className='services-content-title'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1200'
                data-aos-once='true'
              >
                { service.titleLong }
              </h3>
              <p
                className='services-content-text'
                data-aos='fade-left'
                data-aos-delay='300'
                data-aos-duration='1200'
                data-aos-once='true'
              >
                { parse(service.text) }
              </p>
              {
                service.showViewMore &&
                <div
                  className='services-content-button'
                  data-aos='fade-left'
                  data-aos-delay='400'
                  data-aos-duration='1200'
                  data-aos-once='true'
                >
                  <Link href='#'>
                    <span className='default-btn'>
                      View more
                      <span></span>
                    </span>
                  </Link>
                </div>
              }
            </div>
          )
        })
      }
    </div>
  )
}

const ServicesMobile: React.FC<{ getListItemCssClass: (serviceType: ServicesTypes, activeItem: ServicesTypes | '' ) => string }> = ({ getListItemCssClass }) => {
  const [activeItem, setActiveItem] = useState<ServicesTypes | ''>('')
  const [documentInterface, setDocumentInterface] = useState<Document | null>(null)

  function toglerActiveItem (service: ServicesTypes) {
    service === activeItem ? setActiveItem('') : setActiveItem(service)
  }

  useEffect(() => {
    setDocumentInterface(document)
  }, [])

  return (
    <div className='services-mobile'>
      <ul className='services-mobile-list'>
        {
          ServicesConstants.map((service, index) => {
            const contentHeight = documentInterface && documentInterface.getElementById(service.type) && documentInterface.getElementById(service.type)?.scrollHeight

            return (
              <li
                key={ index }
                data-aos='fade-right'
                data-aos-delay={ 200 + (100 * (index + 1)) }
                data-aos-duration='1200'
                data-aos-once='true'
                data-aos-offset='true'
              >
                <span className={ getListItemCssClass(service.type, activeItem) } onClick={ () => toglerActiveItem(service.type) }>
                  { service.titleShort }
                  <div className='services-mobile-item-button'></div>
                </span>
                <div className='services-mobile-content' id={ service.type } style={{ height: `${ contentHeight }px` }}>
                  <h3 className='services-content-title'>
                    { service.titleLong }
                  </h3>
                  <p className='services-content-text'>
                    { parse(service.text) }
                  </p>
                  { service.showViewMore &&
                    <div className='services-content-button'>
                      <Link href='#'>
                        <span className='default-btn'>
                          View more
                          <span></span>
                        </span>
                      </Link>
                    </div>
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

const Services = () => {
  function getListItemCssClass (service: ServicesTypes, activeItem: ServicesTypes | '') {
    return `services-list-item ${ service === activeItem ? 'services-list-item-active' : '' }`
  }

  return (
    <div className='services'>
      <div className='container'>
        <h2
          className='services-title'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          Frequently Asked Questions
        </h2>
        <ServicesDesktop getListItemCssClass={ getListItemCssClass } />
        <ServicesMobile getListItemCssClass={ getListItemCssClass } />
      </div>
    </div>
  )
}

export default Services
