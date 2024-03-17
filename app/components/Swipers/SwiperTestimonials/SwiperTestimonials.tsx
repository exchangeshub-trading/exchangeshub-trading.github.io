'use client'

import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Testimonial } from '@/app/types/TestimonialsTypes'

const CustomSlide: React.FC<{
  index: number,
  isContentOverflowHeight: boolean,
  maxHeightDescription: number,
  testimonial: Testimonial
}> = ({
  index,
  isContentOverflowHeight,
  maxHeightDescription,
  testimonial
}) => {
  const [showMoreDescription, setShowMoreDescription] = useState<boolean>(false)
  const { ref, showImage, showSocial } = testimonial

  if (testimonial === undefined || ref === undefined) {
    return
  }

  return (
    <div className='clients-item'>
      <div className='text'>
        <div className={ `${ showMoreDescription ? 'description more-description' : 'description' }` } style={{ height: `${ maxHeightDescription }px` }}>
          <p id={ String(index) } style={{ height: `${ maxHeightDescription }px` }}>{ ref.description }</p>
          {
            !showMoreDescription && isContentOverflowHeight &&
            <button className='read-more-button' onClick={(() => setShowMoreDescription(!showMoreDescription))} disabled={ showMoreDescription }>Read More</button>
          }
        </div>
      </div>
      <div className='client'>
        {
         showImage && ref.author.image &&
          <div className='client-image'>
            <Image src={ ref.author.image } alt={ ref.author.name } width={ 85 } height={ 85 } />
          </div>
        }
        <div className='title-name'>
          <h3>{ ref.author.name }</h3>
          <span>{ ref.author.position }</span>
          {
           showSocial &&
            <div className='client-socials'>
              {
                ref.author.social.map((socialItem, index) => (
                  <a key={ index } href={ socialItem.href } target='_blank'>
                    <i className={ `ri-${ socialItem.name }-fill` }></i>
                  </a>
                ))
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const SwiperTestimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  const [documentInterface, setDocumentInterface] = useState<Document | null>(null)
  const maxHeightDescription = 210

  useEffect(() => {
    setDocumentInterface(document)
  }, [])
  
  return (
    <Swiper
      spaceBetween={ 30 }
      pagination={{
        clickable: true
      }}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 1
        },
        1400: {
          slidesPerView: 2
        },
        1450: {
          slidesPerView: 2
        }
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      }}
      modules={ [Pagination, Autoplay] }
      className='clients-slides'
    >
      {
        testimonials.map((testimonial, index) => {
          const contentHeight = documentInterface && documentInterface.getElementById(String(index)) && documentInterface.getElementById(String(index))?.scrollHeight
          const isContentOverflowHeight = contentHeight !== undefined && contentHeight !== null && contentHeight > maxHeightDescription

          if (testimonial === undefined || testimonial.ref === undefined) {
            return
          }

          return (
            <SwiperSlide key={ index }>
              <CustomSlide testimonial={ testimonial } isContentOverflowHeight={ isContentOverflowHeight } maxHeightDescription={ maxHeightDescription } index={ index } />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default SwiperTestimonials