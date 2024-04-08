interface Feature {
    checkbox: boolean,
    text: string;
}

interface PricingItem {
    title: string;
    description: string;
    price: string;
    features: Feature[];
}

const list: PricingItem[] = [
    {
        title: "Free",
        description: "Trade seamlessly on dedicated secured server on Binance using predefined bots with 7-days free trial",
        price: "$0.00",
        features: [
            {
                checkbox: true,
                text: 'Dedicated Server'
            },
            {
                checkbox: true,
                text: 'Predefined Bots'
            },
            {
                checkbox: true,
                text: 'Binance'
            },
            {
                checkbox: false,
                text: 'Bitfinex'
            },
            {
                checkbox: false,
                text: 'Kraken'
            },
            {
                checkbox: false,
                text: 'Custom Bots Development'
            }
        ]
    },
    {
        title: "Quantum",
        description: "Trade seamlessly on dedicated secured server on Binance, Bitfinex, and Kraken using predefined bots",
        price: "$249.99",
        features: [
            {
                checkbox: true,
                text: 'Dedicated Server'
            },
            {
                checkbox: true,
                text: 'Predefined Bots'
            },
            {
                checkbox: true,
                text: 'Binance'
            },
            {
                checkbox: true,
                text: 'Bitfinex'
            },
            {
                checkbox: true,
                text: 'Kraken'
            },
            {
                checkbox: false,
                text: 'Custom Bots Development'
            }
        ]
    },
    {
        title: "Infinity",
        description: "Trade seamlessly on dedicated secured server on Binance, Bitfinex, and Kraken using predefined bots and develop your own strategies",
        price: "$999.99+",
        features: [
            {
                checkbox: true,
                text: 'Dedicated Server'
            },
            {
                checkbox: true,
                text: 'Predefined Bots'
            },
            {
                checkbox: true,
                text: 'Binance'
            },
            {
                checkbox: true,
                text: 'Bitfinex'
            },
            {
                checkbox: true,
                text: 'Kraken'
            },
            {
                checkbox: true,
                text: 'Custom Bots Development'
            }
        ]
    }
];

export default list;
