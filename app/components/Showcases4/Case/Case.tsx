import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

const Case: React.FC<{
  imageSrc: string | StaticImageData,
  tags: string[],
  title: string,
  description: string,
  link: string
}> = ({
  imageSrc,
  tags,
  title,
  description,
  link
}) => {
  return (
    <div
      className='col-lg-6'
      data-aos='fade-up'
      data-aos-delay='100'
      data-aos-duration='1200'
      data-aos-once='true'
    >
      <div className='single-cases'>
        <div className='cases-image'>
          <Link href={ link }>
            <Image src={ imageSrc } alt='image-case' width={ 700 } height={ 460 } />
          </Link>
        </div>
        <div className='cases-content'>
          <div className='tags'>
            {
              tags.map((tag, index) => {
                return (
                  <Link href={ link } key={ index }>
                    <span>{ tag }</span>
                  </Link>
                )
              })
            }
          </div>
          <h3>
            <Link href={ link }>
              <span>{ title }</span>
            </Link>
          </h3>
          <p>{ description }</p>
        </div>
      </div>
    </div>
  )
}

export default Case