import ImageGallery from '@/app/components/ImageGallery/ImageGallery'
import { Gallery } from '@/app/types/ShowcaseTypes'

const Galleries: React.FC<{ galleries: Gallery[] | undefined }> = ({ galleries }) => {
  if (galleries === undefined) {
    return
  } else {
    return (
      <div className='container'>
        <div className='galleries'>
          <h2
            className='showcase-technology-stack-title'
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-offset='0'
          >
            Visuals
          </h2>
          <div
            className='galleries-content'
            data-aos='fade-in'
            data-aos-delay='300'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-offset='0'
          >
            {
              galleries.map((gallery, index) => (
                <ImageGallery
                  key={ index }
                  gallery={ gallery.gallery }
                  width={ gallery.width }
                  height={ gallery.height }
                  orientation={ gallery.orientation }
                  position={ gallery.position }
                  gap={ gallery.gap }
                  imageBorderRadius={ gallery.imageBorderRadius }
                  preview={ gallery.preview }
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Galleries
