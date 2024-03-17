import { StaticImageData } from 'next/image'

export interface TestimonialContent {
  description: string,
  author: {
    name: string,
    position: string
    image?: string | StaticImageData,
    social: { href: string, name: string }[]
  }
}

export interface Testimonial {
  showImage: boolean,
  showSocial: boolean,
  ref?: TestimonialContent
}