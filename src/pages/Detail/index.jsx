import { useParams, Navigate } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'
import Loader from '../../components/Loader'
import Gif from '../../components/Gif'
import useOneGif from '../../hooks/useOneGif'

export default function Detail () {
  const { id } = useParams()
  const { gif, loading, error } = useOneGif({ id })

  if (error) return <Navigate to='/404' />
  return (
    <>
      <SearchForm />
      {loading
        ? <Loader />
        // eslint-disable-next-line operator-linebreak
        :
        <>
          <h3 className='search-title'>This is your search results for {gif.title} gifs ...</h3>
          <Gif {...gif} />
        </>}
    </>
  )
}
