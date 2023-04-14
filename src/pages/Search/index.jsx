import { useParams } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'
import ListOfGifs from '../../components/ListOfGifs'
import Loader from '../../components/Loader'

import { useRef, useCallback, useEffect } from 'react'
import useIsAtTarget from '../../hooks/useIsAtTarget'
import useGifs from '../../hooks/useGifs'
import debounce from 'just-debounce-it'

import './styles.css'

export default function Search () {
  const limit = 2
  const { keyword } = useParams()
  const targetRef = useRef()
  const { gifs, loading, setPage, loadingNextPage } = useGifs({ keyword, limit })
  const { isAtTarget } = useIsAtTarget({
    targetRef: loading ? null : targetRef,
    once: false,
    distance: '10px'
  })

  const handleNextPageDebounce = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 150), [setPage])

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
          <h3 className='search-title'>This is your search results for {keyword} gifs ...</h3>
          <ListOfGifs gifs={gifs} />
          {loadingNextPage && <Loader position='bottom' />}
          <div id='watcher' ref={targetRef} />
        </>}
    </>
  )
}
