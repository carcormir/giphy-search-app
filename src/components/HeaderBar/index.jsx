import SearchForm from '../SearchForm'
import { Link } from 'react-router-dom'
import './styles.css'
import { useEffect, useState } from 'react'

const MAX_WIDTH = 880
const PAGE_OFFSET_MOBILE = 0
const PAGE_OFFSET_DESKTOP = 40
export default function HeaderBar () {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll () {
    if ((window.pageYOffset > PAGE_OFFSET_MOBILE && window.innerWidth <= MAX_WIDTH) ||
        (window.pageYOffset > PAGE_OFFSET_DESKTOP && window.innerWidth > MAX_WIDTH)) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <>
      <div className={`search-bar-wrapper ${scrolled ? 'sticky' : ''}`}>
        <Link to='/'>
          <h1 className={`main-title scroll-top ${scrolled ? 'scaleme delay-1' : ''}`}>Giphy Search App</h1>
        </Link>
        <SearchForm />
      </div>
    </>
  )
}
