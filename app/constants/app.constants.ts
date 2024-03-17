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
      href: 'https://github.com/tech1-io',
      name: 'github'
    },
    {
      href: 'mailto:info@tech1.io',
      name: 'mail'
    }
  ]
}

export default ApplicationConstants
