'use client'

import { notFound, useParams } from 'next/navigation'
import ShowcasesConstants from '@/app/constants/showcases.constants'
import Header from '@/app/components/Showcase/Header/Header'
import Features from '@/app/components/Showcase/Features/Features'
import Summary from '@/app/components/Showcase/Summary/Summary'
import TechnologyStack from '@/app/components/Showcase/TechnologyStack/TechnologyStack'
import TechnologyStackDescription from '@/app/components/Showcase/TechnologyStackDescription/TechnologyStackDescription'
import Galleries from '@/app/components/Showcase/Galleries/Galleries'
import Testimonials from '@/app/components/Showcase/Testimonials/Testimonials'

const Showcase = () => {
  const params = useParams()
  const showcase = ShowcasesConstants.find((showcase) => showcase.alt === params.slug)

  if (!showcase) {
    notFound()
  }

  if (!showcase.separatePageConfigs.pagePresent) {
    notFound()
  }

  return (
    <div className='showcase'>
      <div className='showcase-header-wrapper'>
        <div className='container'>
          {
            showcase.separatePageConfigs.headerPresent &&
            <Header title={ showcase.separatePageConfigs.content ? showcase.separatePageConfigs.content.header.title  : '' } description={ showcase.separatePageConfigs.content ? showcase.separatePageConfigs.content.header.description : '' } imageSrc={ showcase.imageSrc } />
          }
        </div>
      </div>
      {
        showcase.separatePageConfigs.featuresPresent &&
        <Features features={ showcase.separatePageConfigs.content ? showcase.separatePageConfigs.content.features : [] } />
      }
      {
        showcase.separatePageConfigs.summaryPresent &&
        <Summary summary={ showcase.separatePageConfigs.content ? showcase.separatePageConfigs.content.summary : '' } />
      }
      {
        showcase.separatePageConfigs.technologyStackPresent &&
        <TechnologyStack technologies={ showcase.separatePageConfigs.content ? showcase.separatePageConfigs.content.technologyStack : [] } />
      }
      {
        showcase.separatePageConfigs.technologyStackDescriptionPresent &&
        <TechnologyStackDescription technologiesDescription={ showcase.separatePageConfigs.content ? showcase.separatePageConfigs.content.technologyStackDescription : {} } />
      }
      {
        showcase.separatePageConfigs.galleriesPresent &&
        <Galleries galleries={ showcase.separatePageConfigs.content?.galleries } />
      }
      {
        showcase.separatePageConfigs.testimonialsPresent &&
        <Testimonials testimonials={ showcase.separatePageConfigs.content?.testimonials } />
      }
    </div>
  )
}

export default Showcase