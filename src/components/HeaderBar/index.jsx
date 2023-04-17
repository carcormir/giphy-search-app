import SearchForm from '../SearchForm'
import { Link } from 'react-router-dom'
import './styles.css'

export default function HeaderBar () {
  return (
    <>

      <div className='search-bar-wrapper'>
        <Link to='/'>
          <h1 className='main-title'>Giphy Search App</h1>
        </Link>
        <SearchForm />
      </div>
    </>
  )
}
