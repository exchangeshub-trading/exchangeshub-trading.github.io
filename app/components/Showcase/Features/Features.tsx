import Image from 'next/image'
import CheckIcon from '@/public/assets/svgs/Showcase/check.svg'

const Features: React.FC<{ features: string[] }> = ({ features }) => {
  return (
    <div className='showcase-features'>
      <div className='container'>
        {
          features.map((feature, index) => (
            <div
              data-aos='fade-right'
              data-aos-delay={ 200 + (100 * (index + 1)) }
              data-aos-duration='1200'
              data-aos-once='true'
              data-aos-offset='1'
              className='showcase-feature'
              key={ feature }
            >
              <Image src={ CheckIcon } alt='check-icon' />
              <p className='showcase-feature-description'>
                { feature }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features