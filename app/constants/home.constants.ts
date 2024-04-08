import TestimonialsConstants from '@/app/constants/testimonials.constants'
import { Testimonial } from '@/app/types/TestimonialsTypes'

const HomeConstants: {
  mainBannerPresent: boolean,
  casesPresent: boolean,
  servicesPresent: boolean,
  pricingPresent: boolean,
  testimonialsPresent: boolean,
  testimonials: Testimonial[],
  launchSoonSubscribe: boolean
} = {
  mainBannerPresent: true,
  casesPresent: false,
  servicesPresent: true,
  pricingPresent: true,
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
    },
    {
      showImage: true,
      showSocial: true,
      ref: TestimonialsConstants.get('francisco')
    }
  ],
  launchSoonSubscribe: true
}

export default HomeConstants
