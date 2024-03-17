import Link from 'next/link'
import Case from '@/app/components/Showcases4/Case/Case'
import AwsCaseImage from '@/public/assets/pngs/Cases/aws.png'
import SlackCaseImage from '@/public/assets/pngs/Cases/slack-cli.png'
import SmartTraderCaseImage from '@/public/assets/pngs/Cases/smart-trader.png'
import TapperCaseImage from '@/public/assets/pngs/Cases/tapper.png'

const Cases = () => {
  return (
    <div className='cases-area ptb-100'>
      <div className='container'>
        <div
          className='section-title'
          data-aos='fade-in'
          data-aos-delay='100'
          data-aos-duration='1200'
          data-aos-once='true'
        >
          <h2>Our Realizations / Recent Cases</h2>
          <p>
            Best Strategic planning dolor sit amet consectetur adipiscing
            elit. Scelerisque amet odio velit auctor nam elit nulla eget
            sodales dui pulvina
          </p>
        </div>

        <div className='row justify-content-center'>
          <Case
            imageSrc={ SmartTraderCaseImage }
            tags={ ['Cryptocurrency'] }
            title='Smart Trader'
            description='Easy management processes allows you to save you time and make trading easier.'
            link='/showcase/smart-trader'
          />

          <Case
            imageSrc={ TapperCaseImage }
            tags={ ['Mobile application'] }
            title='Tappter'
            description='App to swap your private data with friends and partners easily.'
            link='/showcase/tapper'
          />

          <Case
            imageSrc={ SlackCaseImage }
            tags={ ['Chat bot'] }
            title='Slack-based App'
            description='App to swap your private data with friends and partners easily.'
            link='/showcase/slack-infrastructure-center'
          />

          <Case
            imageSrc={ AwsCaseImage }
            tags={ ['Platform'] }
            title='Vertex'
            description='The AWS cloud software for Cerebra - a new state-of-the-art IoT system for aquarium environment control.'
            link='/showcase/vertex-cerebra-iot'
          />

          <div
            className='cases-view-all-btn'
            data-aos='fade-in'
            data-aos-delay='200'
            data-aos-duration='1200'
            data-aos-once='true'
          >
            <Link href='/case-study'>
              <span className='default-btn'>
                View All Projects
                <i className='ri-briefcase-line'></i>
                <span></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cases
