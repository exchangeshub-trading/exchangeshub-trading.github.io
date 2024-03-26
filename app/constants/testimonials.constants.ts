import { TestimonialContent } from '@/app/types/TestimonialsTypes'
import davidIMG from '@/public/assets/jpgs/Testimonials/david/david.png'
import robertIMG from '@/public/assets/jpgs/Testimonials/robert/robert.png'
import franciscoIMG from '@/public/assets/jpgs/Testimonials/francisco/francisco.png'

type KeyName = 'david' | 'robert' | 'francisco'

const TestimonialsConstants: Map<KeyName, TestimonialContent> = new Map([
  ['david', {
    description: 'ExchangesHub (powered by Tech1 team) has been a game-changer for me. ' +
      'It is I\'ve seen a solid ~16% increase in profits each year, which is impressive. ' +
      'It\'s like having a reliable partner in the crypto world, helping me navigate and grow my investments with confidence. ' +
      'Utilizing exchanges like Binance, Bitfinex, and Kraken, I\'ve found their tools to be incredibly stable and highly configurable. ' +
      'It\'s allowing me to test my ideas and develop my own bots to fit my investment goals perfectly.',
    author: {
      name: '🇦🇪 David',
      position: 'Anonymous Trader in UAE',
      image: davidIMG,
      social: []
    }
  }],
  ['robert', {
    description: 'We are using EHB (remark. ExchangeHubBots) to manage a fraction of my portfolio (~$2.5 million annually). ' +
      'It\'s has been advantageous. ' +
      'With a steady 20% return, EHB become a one of fundamental aspect of my financial strategy. ' +
      'It covers my development and trading expenses and enables me to live a fulfilling life. ' +
      'My trading team operates HFT bots and handles all the heavy lifting. ' +
      'They deal with market complexities with precision and efficiency.',
    author: {
      name: '🇬🇧 Robert',
      position: 'Anonymous Crypto Portfolio Owner in London, UK',
      image: robertIMG,
      social: []
    }
  }],
  ['francisco', {
    description: 'I\'ve been using the this app for a while now. ' +
      'The team\'s communication is excellent, ensuring adequate responses to any concerns. ' +
      'The app itself is impressively stable, providing reliable trade execution. ' +
      'What\'s more, it\'s affordable and customizable to fit individual trading styles. ' +
      'I use it not just as trading tool but also an investment platform. Recommend!',
    author: {
      name: '🇵🇹 Francisco',
      position: 'Anonymous Trader/Investor in Lisbon, Portugal',
      image: franciscoIMG,
      social: []
    }
  }]
])

export default TestimonialsConstants
