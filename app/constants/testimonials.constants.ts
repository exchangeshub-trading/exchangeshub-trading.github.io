import { TestimonialContent } from '@/app/types/TestimonialsTypes'
import Client1 from '@/public/assets/jpgs/Testimonials/Client1/Client1.png'
import Client2 from '@/public/assets/jpgs/Testimonials/Client2/Client2.png'

type KeyName = 'client1' | 'client2'

const TestimonialsConstants: Map<KeyName, TestimonialContent> = new Map([
  ['client1', {
    description: 'The Java codebase showcases exemplary software development practices, scoring a perfect 10 out of 10. The implementation is robust, well-structured, and adheres closely to industry standards.',
    author: {
      name: 'John Doe',
      position: 'CEO at Company1',
      image: Client1,
      social: [
        {
          href: 'https://www.linkedin.com/',
          name: 'linkedin'
        }
      ]
    }
  }],
  ['client2', {
    description: 'The JavaScript project demonstrates exceptional software development proficiency, earning a flawless 10 out of 10. The codebase is efficient, maintainable, and effectively leverages the languages capabilities to deliver a high-quality solution.',
    author: {
      name: 'John Doe',
      position: 'CTO at Company2',
      image: Client2,
      social: [
        {
          href: 'https://www.linkedin.com/',
          name: 'linkedin'
        }
      ]
    }
  }]
])

export default TestimonialsConstants
