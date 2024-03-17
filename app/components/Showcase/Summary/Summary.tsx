import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Summary: React.FC<{ summary: string }> = ({ summary }) => {

  return (
    <div className='showcase-summary'>
      <div className='container'>
        <h2
          className='showcase-summary-title'
          data-aos='fade-in'
          data-aos-delay='200'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          Project
        </h2>
        <div
          className='showcase-summary-description'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          <base target="_blank" />
          <Markdown remarkPlugins={ [remarkGfm] }>{ summary }</Markdown>
        </div>
      </div>
    </div>
  )
}

export default Summary