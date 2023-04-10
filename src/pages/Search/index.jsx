import { useParams } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'
import ListOfGifs from '../../components/ListOfGifs'

export default function Search () {
  const { keyword } = useParams()
  const limit = 15
  return (
    <>
      <SearchForm />
      <h3>This is your search results for {keyword} gifs ...</h3>
      <ListOfGifs keyword={keyword} limit={limit} />
    </>
  )
}
