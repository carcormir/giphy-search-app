import { useNavigate } from 'react-router-dom'
import { useId, useState } from 'react'
import './styles.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const LIMITS = ['5', '10', '20', '25', '30']

export default function SearchForm () {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const ratingId = useId()
  const limitId = useId()

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    const newKeyword = event.target.value
    setKeyword(newKeyword)
    console.log(newKeyword)
  }

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='search'>
        <input
          placeholder='Input your search here ...'
          onChange={handleChange}
          type='text'
          value={keyword}
        />
        <button>Search</button>
      </div>
      <div className='search-options'>
        <label>Rating</label>
        <select name='rating' id={ratingId}>
          <option value='' disabled>Rating</option>
          {
            RATINGS.map(rating => {
              return (
                <option key={rating}>{rating}</option>
              )
            })
          }
        </select>
        <label>Limit</label>
        <select name='limit' id={limitId}>
          <option value='' disabled>Limit</option>
          {
            LIMITS.map(limit => {
              return (
                <option key={limit}>{limit}</option>
              )
            })
          }
        </select>
      </div>
    </form>
  )
}
