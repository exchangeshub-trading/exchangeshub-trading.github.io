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
  testimonialsPresent: true,
  testimonials: [
    {
      showImage: true,
      showSocial: true,
      ref: TestimonialsConstants.get('david')
    },
    {
      showImage: true,
      showSocial: true,
      ref: TestimonialsConstants.get('robert')
    }
  ]
}

export default HomeConstants
