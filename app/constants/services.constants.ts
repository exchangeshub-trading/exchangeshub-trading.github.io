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
    titleShort: 'How many bots do you offer?',
    titleLong: 'How many bots do you offer?',
    text: `
      All our customers prefer to craft their own bots with unique modifications. 
      Currently, we support over 10 different bots/strategies.
      <br />
      <br />
      Our platform offers an API for effortless bot creation. 
      Additionally, we provide a basic arbitrage bot to help you understand the functionality of our platform.
    `,
    showViewMore: false
  },
  {
    type: 'bots-strategies',
    titleShort: 'Can I customize trading strategies with your bots?',
    titleLong: 'Can I customize trading strategies with your bots?',
    text: `
      Yes.
      <br />
      <br />
      We can create custom trading bots and strategies specifically to your needs.
    `,
    showViewMore: false
  },
  {
    type: 'security',
    titleShort: 'How do you ensure data security?',
    titleLong: 'How do you ensure data security?',
    text: `
      We deploy our application to a dedicated server or cloud environment exclusively for your use.
      <br />
      <br />
      Your data remains completely private and inaccessible to anyone else.
    `,
    showViewMore: false
  },
  {
    type: 'free-trial',
    titleShort: 'Do you offer a free trial for your trading bots?',
    titleLong: 'Do you offer a free trial for your trading bots?',
    text: `
      Yes. 
      <br />
      <br />
      We provide a complimentary 1-week trial period.
    `,
    showViewMore: false
  }
  // Do I need programming skills to use your trading bots?
  // Can I backtest my trading strategies with your bots?
  // Are there any restrictions on the number of trades I can execute with your bots?
  // What payment methods do you accept for subscription fees?
]

export default ServicesConstants
