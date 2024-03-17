import { TechnologyStack } from '@/app/types/ShowcaseTypes'

const TechnologyStack: React.FC<{ technologies: TechnologyStack[] }> = ({ technologies }) => {

  function getControlButtonCssClass () {
    let cssClass = 'showcase-technology-stack-control-button '

    switch (technologies.length) {
      case 4:
        cssClass += 'showcase-technology-stack-control-button-4'
        break
      case 3:
        cssClass += 'showcase-technology-stack-control-button-3'
        break
      case 2:
        cssClass += 'showcase-technology-stack-control-button-2'
        break
      default:
        break
    }

    return cssClass
  }

  return (
    <div className='showcase-technology-stack'>
      <div className='container'>
        <h2
          className='showcase-technology-stack-title'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          Technologies
        </h2>
        <div
          className='showcase-technology-stack-swiper'
          data-aos='fade-left'
          data-aos-delay='300'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          <div
            className={`${ getControlButtonCssClass() } showcase-technology-stack-control-button-prev` }
            style={{ display: technologies.length <= 4 ? 'none' : 'flex' }}
            data-aos='fade-fade'
            data-aos-delay='400'
            data-aos-duration='1200'
            data-aos-once='true'
            onMouseDown={(event) => event.preventDefault()}
          />
          <div
            style={{ display: technologies.length <= 4 ? 'none' : 'flex' }}
            className={`${ getControlButtonCssClass() } showcase-technology-stack-control-button-next` }
            data-aos='fade-fade'
            data-aos-delay='400'
            data-aos-duration='1200'
            data-aos-once='true'
            onMouseDown={(event) => event.preventDefault()}
          />
        </div>
      </div>
    </div>
  )
}

export default TechnologyStack
