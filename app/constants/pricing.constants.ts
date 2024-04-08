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
        title: "Basic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$29.99",
        features: [
            {
                checkbox: true,
                text: '1 GB of Storage'
            },
            {
                checkbox: true,
                text: '2 Users'
            },
            {
                checkbox: true,
                text: '24/7 Support'
            },
            {
                checkbox: false,
                text: 'Security Suite'
            },
            {
                checkbox: false,
                text: 'Invoicing'
            }
        ]
    },
    {
        title: "Standard",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$49.99",
        features: [
            {
                checkbox: true,
                text: "5 GB of Storage"
            },
            {
                checkbox: true,
                text: "5 Users"
            },
            {
                checkbox: true,
                text: "24/7 Support"
            },
            {
                checkbox: true,
                text: "Security Suite"
            },
            {
                checkbox: false,
                text: "Invoicing"
            }
        ]
    },
    {
        title: "Premium",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: "$99.99",
        features: [
            {
                checkbox: true,
                text: "10 GB of Storage"
            },
            {
                checkbox: true,
                text: "10 Users"
            },
            {
                checkbox: true,
                text: "24/7 Support"
            },
            {
                checkbox: true,
                text: "Security Suite"
            },
            {
                checkbox: true,
                text: "Invoicing"
            }
        ]
    }
];

export default list;
