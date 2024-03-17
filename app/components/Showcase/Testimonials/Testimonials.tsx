import Image from 'next/image'
import { Testimonial } from '@/app/types/TestimonialsTypes'

const Testimonials: React.FC<{ testimonials: Testimonial | undefined }> = ({ testimonials }) => {
    if  (testimonials === undefined || testimonials.ref === undefined) {
      return
    } else {
      return (
        <div className='showcase-testimonials'>
          <div className="container">
            <h2
              className='showcase-testimonials-title'
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='1200'
              data-aos-once='true'
            >
              Testimonials
            </h2>
            <div
              className='showcase-testimonials-card'
              data-aos='fade-in'
              data-aos-delay='300'
              data-aos-duration='1200'
              data-aos-once='true'
            >
              <div className='showcase-testimonials-text'>
                <div
                  className='showcase-testimonials-description'
                  data-aos='fade-in'
                  data-aos-delay='400'
                  data-aos-duration='1200'
                  data-aos-once='true'
                >
                  { testimonials.ref.description }
                </div>
                <div className='showcase-testimonials-author'>
                  {
                    testimonials.showImage && testimonials.ref.author.image &&
                    <div className='showcase-testimonials-wrapper-image'>
                      <Image
                        className='showcase-testimonials-author-image'
                        src={ testimonials.ref.author.image }
                        alt='author'
                        data-aos='fade-in'
                        data-aos-delay='500'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        data-aos-offset='0'
                      />
                    </div>
                  }
                  <div className='showcase-testimonials-author-description'>
                    <h3
                      className='showcase-testimonials-author-name'
                      data-aos='fade-in'
                      data-aos-delay='600'
                      data-aos-duration='1200'
                      data-aos-once='true'
                      data-aos-offset='0'
                    >
                      { testimonials.ref.author.name }
                    </h3>
                    <div
                      className='showcase-testimonials-author-position'
                      data-aos='fade-in'
                      data-aos-delay='700'
                      data-aos-duration='1200'
                      data-aos-once='true'
                      data-aos-offset='0'
                    >
                      { testimonials.ref.author.position }
                    </div>
                    {
                      testimonials.showSocial && testimonials.ref.author.social.length &&
                      <div
                        className='showcase-testimonials-author-socials'
                        data-aos='fade-in'
                        data-aos-delay='800'
                        data-aos-duration='1200'
                        data-aos-once='true'
                        data-aos-offset='0'
                      >
                        {
                          testimonials.ref.author.social.map((socialItem, index) => (
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
            </div>
          </div>
        </div>
      )
    }
}

export default Testimonials