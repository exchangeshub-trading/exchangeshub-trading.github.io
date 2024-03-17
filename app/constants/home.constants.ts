import TestimonialsConstants from '@/app/constants/testimonials.constants'
import { Testimonial } from '@/app/types/TestimonialsTypes'

const HomeConstants: {
  mainBannerPresent: boolean,
  casesPresent: boolean,
  servicesPresent: boolean,
  testimonialsPresent: boolean,
  testimonials: Testimonial[]
} = {
  mainBannerPresent: true,
  casesPresent: false,
  servicesPresent: true,
  testimonialsPresent: false,
  testimonials: [
    {
      showImage: true,
      showSocial: true,
      ref: TestimonialsConstants.get('client1')
    },
    {
      showImage: true,
      showSocial: true,
      ref: TestimonialsConstants.get('client2')
    }
  ]
}

export default HomeConstants
