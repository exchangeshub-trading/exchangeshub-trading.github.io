import Link from 'next/link'

function NotFoundPage() {
	return (
    <div className='not-found-page'>
      <h1 className='status-code'>404</h1>
      <h2>Page Not Found</h2>
      <Link href='/'>
        <span className='default-btn'>
          Home
          <span></span>
        </span>
      </Link>
    </div>
  )
}

export default NotFoundPage