import SearchForm from '../SearchForm'
import { Link } from 'react-router-dom'
import './styles.css'
import { useEffect, useState } from 'react'

export default function HeaderBar () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll () {
    if (window.pageYOffset > 40) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <>
      <div className={`search-bar-wrapper ${scrolled ? 'sticky' : ''}`}>
        <Link to='/'>
          <h1 className={`main-title scroll-top ${scrolled ? 'rotate' : ''}`}>Giphy Search App</h1>
        </Link>
        <SearchForm />
      </div>
    </>
  )
}
