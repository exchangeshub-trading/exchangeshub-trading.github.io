import { NavigationTab } from '@/app/types/NavigationTypes'
import SocialItem from '@/app/types/SocialType'

const ApplicationConstants: {
  NAVIGATION_TABS: NavigationTab[],
  SOCIAL_ITEMS: SocialItem[]
} = {
  NAVIGATION_TABS: [
    {
      name: 'Home',
      pathName: '/',
      hide: true
    },
    {
      name: 'Showcases',
      pathName: '/showcases',
      hide: true
    }
  ],
  SOCIAL_ITEMS: [
    {
      href: 'https://t.me/yyluchkiv',
      name: 'telegram'
    },
    {
      href: 'https://twitter.com/yyluchkiv',
      name: 'twitter'
    },
    {
      href: 'mailto:info@yyluchkiv.com',
      name: 'mail'
    }
  ]
}

export default ApplicationConstants
