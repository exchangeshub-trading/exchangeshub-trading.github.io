'use client'

import { useEffect, useState } from 'react'
import { TechnologyStackDescription, TechnologyStackDescriptionKeys } from '@/app/types/ShowcaseTypes'

const TechnologyStackDescription: React.FC<{ technologiesDescription: TechnologyStackDescription }> = ({ technologiesDescription }) => {
  const [activeItem, setActiveItem] = useState<string>('')
  const [documentInterface, setDocumentInterface] = useState<Document | null>(null)
  const technologiesDescriptionKeys = Object.keys(technologiesDescription) as Array<keyof typeof technologiesDescription>

  function switchActiveItem (service: string) {
    service === activeItem ? setActiveItem('') : setActiveItem(service)
  }

  function getListItemNumber (index: number) {
    return index < 10 ? `0${index}` : `${index}`
  }

  useEffect(() => {
    setDocumentInterface(document)
  }, [])

  return (
    <div className='technology-stack-description'>
      <div className='container'>
        <h2
          className='showcase-technology-stack-title'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1200'
          data-aos-once='true'
          data-aos-offset='0'
        >
          Technology Stack Description
        </h2>
        <ul className='technology-stack-description-list'>
          {
            technologiesDescriptionKeys.map((technology: TechnologyStackDescriptionKeys, index: number) => {
              const contentHeight = documentInterface && documentInterface.getElementById(technology) && documentInterface.getElementById(technology)?.scrollHeight

              return (
                <li
                  className='technology-stack-description-item'
                  key={ index }
                  data-aos='fade-right'
                  data-aos-delay={ 200 + (100 * (index + 1)) }
                  data-aos-duration='1200'
                  data-aos-once='true'
                  data-aos-offset='0'
                >
                  <div className={`technology-stack-description-item-wrapper ${ activeItem === technology ? 'technology-stack-description-item-wrapper-active': '' }`}>
                    <div className='technology-stack-description-item-container'>
                      <div className={`technology-stack-description-item-header ${ activeItem === technology ? 'technology-stack-description-item-header-active': '' }`}>
                        <h3 className='technology-stack-description-item-number'>{ getListItemNumber(index + 1) }</h3>
                        <h3 className='technology-stack-description-item-title' onClick={ () => switchActiveItem(technology) }>
                          { technology }
                          <div className='services-mobile-item-button'></div>
                        </h3>
                      </div>
                      <div
                        className={`technology-stack-description-item-content ${ activeItem === technology ? 'technology-stack-description-item-content-visible' : '' }` }
                        id={ technology }
                        style={{ height: `${ contentHeight }px` }}
                      >
                        <ul className='technology-stack-description-item-list'>
                          {
                            technologiesDescription[technology]!.map((technologyItem: string, index: number) => (
                              <li className='technology-stack-description-item-name' key={ index }>
                                { technologyItem }
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default TechnologyStackDescription