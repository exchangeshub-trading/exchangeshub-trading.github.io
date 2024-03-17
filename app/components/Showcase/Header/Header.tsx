import Image, { StaticImageData } from 'next/image'

const Header: React.FC<{ title: string, description: string, imageSrc: string | StaticImageData }> = ({ title, description, imageSrc }) => {
  return (
    <div className='showcase-header'>
      <div className='showcase-header-text'>
        <h1
          className='showcase-header-title'
          data-aos='fade-right'
          data-aos-delay='0'
          data-aos-duration='1000'
          data-aos-once='true'
        >
          { title }
        </h1>
        <p
          className='showcase-header-description'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'
          data-aos-once='true'
        >
          { description }
        </p>
      </div>
      <div
        className='showcase-header-image-wrapper'
        data-aos='fade-up'
        data-aos-delay='200'
        data-aos-duration='1000'
        data-aos-once='true'
      >
        <Image className='showcase-header-image' src={ imageSrc } alt={ title } />
      </div>
    </div>
  )
}

export default Header