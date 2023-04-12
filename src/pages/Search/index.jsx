import { useParams } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'
import ListOfGifs from '../../components/ListOfGifs'
import Loader from '../../components/Loader'

import { useRef, useCallback, useEffect } from 'react'
import useIsAtTarget from '../../hooks/useIsAtTarget'
import useGifs from '../../hooks/useGifs'
import debounce from 'just-debounce-it'

export default function Search () {
  const limit = 2
  const { keyword } = useParams()
  const targetRef = useRef()
  const { gifs, loading, setPage } = useGifs({ keyword, limit })
  const { isAtTarget } = useIsAtTarget({
    targetRef: loading ? null : targetRef,
    once: false,
    distance: '200px'
  })

  const handleNextPageDebounce = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200), [setPage])

  useEffect(() => {
    if (isAtTarget) handleNextPageDebounce()
  }, [handleNextPageDebounce, isAtTarget])

  return (
    <>
      <SearchForm />
      {loading
        ? <Loader />
        // eslint-disable-next-line operator-linebreak
        :
        <>
          <h3>This is your search results for {keyword} gifs ...</h3>
          <ListOfGifs gifs={gifs} />
          <div id='watcher' ref={targetRef} />
        </>}
    </>
  )
}
