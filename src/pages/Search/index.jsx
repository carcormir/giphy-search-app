import React, { useRef, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchForm from '../../components/SearchForm'
import ListOfGifs from '../../components/ListOfGifs'
import Loader from '../../components/Loader'

import useIsAtTarget from '../../hooks/useIsAtTarget'
import useGifs from '../../hooks/useGifs'
import debounce from 'just-debounce-it'
import HeaderBar from '../../components/HeaderBar'

function Search () {
  const limit = 10
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
      <HeaderBar />
      {loading
        ? <Loader />
        // eslint-disable-next-line operator-linebreak
        :
        <div className='search-wrapper'>
          <h3 className='search-title'>This is your search results for {keyword} gifs ...</h3>
          <ListOfGifs gifs={gifs} />
          {loadingNextPage && <Loader position='bottom' />}
          <div id='watcher' ref={targetRef} />
        </div>}
    </>
  )
}

export default React.memo(Search)
