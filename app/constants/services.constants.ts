import Service from '@/app/types/ServiceTypes'

const ServicesConstants: Service[] = [
  {
    type: 'exchanges-support',
    titleShort: 'How many exchanges are supported?',
    titleLong: 'How many exchanges are supported?',
    text: `
      We currently support trading on three exchanges: Binance (spot and futures), Bitfinex, and Kraken (spot and futures).
      <br />
      <br />
      Additionally, we are actively developing support for three more exchanges: Bybit, GateIO, and KuCoin.
    `,
    showViewMore: false
  },
  {
    type: 'bots-support',
    titleShort: 'How many bots do we offer?',
    titleLong: 'How many bots do we offer?',
    text: `
      All our customers prefer to craft their own bots with unique modifications. 
      Currently, we support over 10 different bots/strategies.
      <br />
      <br />
      Our platform offers an API for effortless bot creation. 
      Additionally, we provide a basic arbitrage bot to help you grasp the functionality of our platform.
    `,
    showViewMore: false
  },
  {
    type: 'feature3',
    titleShort: 'Feature3',
    titleLong: 'Feature3 [Long]',
    text: `
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      <br />
      <br />
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
    `,
    showViewMore: false
  },
  {
    type: 'feature4',
    titleShort: 'Feature4',
    titleLong: 'Feature4 [Long]',
    text: `
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      <br />
      <br />
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
    `,
    showViewMore: false
  },
  {
    type: 'feature5',
    titleShort: 'Feature5',
    titleLong: 'Feature5 [Long]',
    text: `
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      <br />
      <br />
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
      Contrary to popular belief, Lorem Ipsum is not simply random text. 
    `,
    showViewMore: false
  }
]

export default ServicesConstants
