import Services from '@/app/types/ServicesTypes'

interface Service {
  type: Services,
  titleShort: string,
  titleLong: string,
  text: string,
  showViewMore: boolean
}

export default Service