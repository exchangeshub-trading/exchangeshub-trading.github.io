import SwiperTestimonials from '@/app/components/Swipers/SwiperTestimonials/SwiperTestimonials'
import HomeConstants from '@/app/constants/home.constants'

const Testimonials = () => {
  const testimonials = HomeConstants.testimonials
  
  if (!testimonials.length) {
    return
  }

  return (
    <div className="clients-area ptb-100">
      <div className="container">
        <div
          className="section-title"
          data-aos='fade-down'
          data-aos-delay='200'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          <h2>What our clients say about us</h2>
        </div>
        <div
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          <SwiperTestimonials testimonials={ testimonials } />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
