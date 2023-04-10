import { useParams } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'
import ListOfGifs from '../../components/ListOfGifs'
import { useRef, useCallback, useEffect } from 'react'
import useIsAtTarget from '../../hooks/useIsAtTarget'
import useGifs from '../../hooks/useGifs'
import debounce from 'just-debounce-it'

export default function Search () {
  const limit = 15
  const { keyword } = useParams()
  const targetRef = useRef()
  const { gifs, loading, setPage } = useGifs({ keyword, limit })
  const { isAtTarget } = useIsAtTarget({
    targetRef: loading ? null : targetRef,
    once: false,
    distance: '100px'
  })

  const handleNextPageDebounce = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 3000), [setPage])

  useEffect(() => {
    console.log(isAtTarget)
    if (isAtTarget) handleNextPageDebounce()
  }, [isAtTarget, handleNextPageDebounce])

  return (
    <>
      <SearchForm />
      <h3>This is your search results for {keyword} gifs ...</h3>
      {
        loading
          ? <h1>Loading Gifs ...</h1>
          : <ListOfGifs gifs={gifs} />
        }
      <div id='watcher' ref={targetRef} />
    </>
  )
}
