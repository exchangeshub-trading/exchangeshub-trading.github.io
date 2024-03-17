import { Showcase } from '@/app/types/ShowcaseTypes'
import Link from 'next/link'
import { useSwiper } from 'swiper/react'

const SwiperButtons: React.FC<{}> = ({}) => {
  const swiper = useSwiper()

  return (
    <div className='slide-control'>
      <div className='slide-control-button slide-control-button-prev' onClick={ () => swiper.slidePrev(1) }></div>
      <div className='slide-control-button slide-control-button-next' onClick={ () => swiper.slideNext(1) } ></div>
    </div>
  )
}

const Case: React.FC<{ slideNumber: string, showcase: Showcase }> = ({ slideNumber, showcase }) => {
  return (
    <div className='slide'>
      <h2 className='slide-number'>{ slideNumber }</h2>
      <h3 className='slide-title'>
        {
          showcase.linkEnabled
          ?
          <Link href={ showcase.link } target={ showcase.linkTarget }>
            <span>{ showcase.title }</span>
          </Link>
          :
          <span>{ showcase.title }</span>
        }
      </h3>
      <div className='slide-description'>{ showcase.description }</div>
      <div className="slide-tags">
        {
          showcase.tags.map(tag => <span key={ tag }>{ tag }</span>)
        }
      </div>
      <SwiperButtons />
    </div>
  )
}

export default Case