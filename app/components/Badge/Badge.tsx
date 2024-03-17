import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

const Badge: React.FC<{ iconSource: string | StaticImageData, alt: string, link: string }> = ({ iconSource, alt, link }) => {
  return (
    <Link href={ link } target='_blank' className='badge'>
      <Image src={ iconSource } alt={ alt } height={ 50 } />
    </Link>
  )
}

export default Badge