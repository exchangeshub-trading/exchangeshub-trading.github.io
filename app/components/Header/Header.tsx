'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import LogoIcon from '@/public/assets/pngs/Header/logo.png'
import ApplicationConstants from '@/app/constants/app.constants'

const Header = () => {
  const [currentPath, setCurrentPath] = useState('')
  const [isActiveSidebarModal, setActiveSidebarModal] = useState(false)
  const router = usePathname()
  const [menu, setMenu] = useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal)
  }

  useEffect(() => {
    setCurrentPath(router)
  }, [router])

  useEffect(() => {
    let elementId = document.getElementById('navbar')
    document.addEventListener('scroll', () => {
      if (elementId) {
        if (window.scrollY > 0) {
          elementId.classList.add('is-sticky')
        } else {
          elementId.classList.remove('is-sticky')
        }
      }
    })
  })

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === 'Escape') {
        event.preventDefault()

        setActiveSidebarModal(false)
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [])

  const nabarAreaCssClass = menu
    ? 'navbar-area'
    : 'navbar-area active'
  const navbarSupportedContentcssClass = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show'
  const navbarTogglerCssClass = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <>
      <div
        id='navbar'
        className={ nabarAreaCssClass }
      >
        <div
          className='main-navbar'
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              <Link href='/' className='navbar-brand'>
                <Image className='navbar-logo' src={ LogoIcon } alt='logo' width={ 50 } height={ 36 } priority={ true } />
              </Link>
              <p className='navbar-logo-text'>ExchangesHub</p>

              <button
                onClick={ toggleNavbar }
                className={ navbarTogglerCssClass }
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div className={ navbarSupportedContentcssClass } id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                  {ApplicationConstants.NAVIGATION_TABS.map(tab => {
                    if (!tab.hide) {
                      const isActiveTab = currentPath === tab.pathName
                      return (
                        <li className='nav-item' key={ tab.name }>
                          <Link href={ tab.pathName } onClick={ toggleNavbar }>
                            <span className={ `nav-link ${ isActiveTab && 'active' }`}>{ tab.name }</span>
                          </Link>
                        </li>
                      )
                    }
                  })}
                  <li className='nav-item nav-item-about-us'>
                    <div className='side-menu-btn' onClick={ handleToggleSidebarModal }>
                      <span className='nav-link'>About Us</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='others-options d-flex align-items-center'>
                <div className='option-item'>
                  <div className='side-menu-btn' onClick={ handleToggleSidebarModal }>
                    <i className='ri-menu-4-line'></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className={ `sidebarModal modal right ${ isActiveSidebarModal ? 'show' : '' }` }>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              onClick={ handleToggleSidebarModal }
            >
              <i className='ri-close-line'></i>
            </button>

            <div className='modal-body'>
              <div className='title'>
                <Image className='sidebar-logo' src={ LogoIcon } alt='logo' width={ 36 } height={ 36 } priority={ true } />
                <p className='sidebar-logo-text'>ExchangesHub</p>
              </div>

              <div className='sidebar-content'>
                <p>
                  ExchangesHub (powered by Tech1) is a platform to automate your crypto profits via trading bots on Binance, Bitfinex, and Kraken
                </p>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact us</h3>

                <ul className="info-list">
                  <li>
                    🇺🇦 Ukraine, Lviv
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href="mailto:yyluchkiv@gmail.com">yyluchkiv@gmail.com</a>
                  </li>
                </ul>
              </div>

              <ul className='sidebar-social-list'>
                {
                  ApplicationConstants.SOCIAL_ITEMS.map(socialItem => {
                    if (!socialItem.hide) {
                      return (
                        <li key={ socialItem.name }>
                          <a href={ socialItem.href } target={ socialItem.name !== 'mail' ? '_blank' : '_self' }>
                            <i className={ `ri-${ socialItem.name }-fill` }></i>
                          </a>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
