'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-fade';
import { EffectCube, Navigation, EffectFade } from 'swiper/modules'
import Case from '@/app/components/Swipers/SwiperCases/Case/Case'
import Image from 'next/image'
import ShowcasesConstants from '@/app/constants/showcases.constants'

const Cases = () => {
  function getSlideNumber (index: number) {
    return index < 10 ? `0${index}` : `${index}`
  }

  return (
    <div className='swiper-cases'>
      <div className='container'>
        <h2
          className='swiper-cases-title'
          data-aos='fade-in'
          data-aos-delay='100'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          Our software development results and showcases
        </h2>
        <div className='swipers'>
          <Swiper
            className='swiper cases-swiper-cube'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1200'
            data-aos-once='true'
            spaceBetween={ 0 }
            slidesPerView={ 1 }
            navigation={{
              nextEl: '.slide-control-button-next',
              prevEl: '.slide-control-button-prev'
            }}
            modules={ [EffectCube, Navigation] }
            allowTouchMove={ false }
            loop={ true }
            effect={ 'cube' }
            cubeEffect={{
              shadow: false,
              slideShadows: false
            }}
          >
            {
              ShowcasesConstants.map((showcase, index) => {
                return (
                  <SwiperSlide key={ index }>
                    <Case
                      slideNumber={ getSlideNumber(index + 1) }
                      showcase={ showcase }
                    />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <Swiper
            className='cases-swiper-fade'
            data-aos='fade-up'
            data-aos-delay='400'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-offset='0'
            spaceBetween={ 100 }
            effect={ 'fade' }
            loop={ true }
            allowTouchMove={ false }
            modules={ [EffectFade, Navigation] }
            navigation={{
              nextEl: '.slide-control-button-next',
              prevEl: '.slide-control-button-prev'
            }}
          >
            {
              ShowcasesConstants.map((showcase, index) => {
                return (
                  <SwiperSlide className='swiper-slide-image' key={ index }>
                    <Image src={ showcase.imageSrc } alt={ showcase.alt } />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Cases
