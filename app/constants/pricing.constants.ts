import { IoCheckmark, IoCloseOutline } from 'react-icons/io5';

interface Feature {
    icon: typeof IoCheckmark | typeof IoCloseOutline; 
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
                icon: IoCheckmark,
                text: '1 GB of Storage'
            },
            {
                icon: IoCheckmark,
                text: '2 Users'
            },
            {
                icon: IoCheckmark,
                text: '24/7 Support'
            },
            {
                icon: IoCloseOutline,
                text: 'Security Suite'
            },
            {
                icon: IoCloseOutline,
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
                icon: IoCheckmark,
                text: "5 GB of Storage"
            },
            {
                icon: IoCheckmark,
                text: "5 Users"
            },
            {
                icon: IoCheckmark,
                text: "24/7 Support"
            },
            {
                icon: IoCloseOutline,
                text: "Security Suite"
            },
            {
                icon: IoCloseOutline,
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
                icon: IoCheckmark,
                text: "10 GB of Storage"
            },
            {
                icon: IoCheckmark,
                text: "10 Users"
            },
            {
                icon: IoCheckmark,
                text: "24/7 Support"
            },
            {
                icon: IoCheckmark,
                text: "Security Suite"
            },
            {
                icon: IoCheckmark,
                text: "Invoicing"
            }
        ]
    }
];

export default list;
