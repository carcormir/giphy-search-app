import { useRef, useCallback, useEffect } from 'react'
import debounce from 'just-debounce-it'

import HeaderBar from '../../components/HeaderBar'
import Loader from '../../components/Loader'
import ListOfGifs from '../../components/ListOfGifs'

import useTrendingGifs from '../../hooks/useTrendingGifs'
import useIsAtTarget from '../../hooks/useIsAtTarget'

export default function Home () {
  const targetRef = useRef()
  const limit = 10
  const { gifs, loading, setPage, loadingNextPage } = useTrendingGifs({ limit })
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
      <h3 className='search-title'>Trending gifs ...</h3>
      {loading
        ? <Loader />
        // eslint-disable-next-line operator-linebreak
        :
        <>
          <ListOfGifs gifs={gifs} />
          {loadingNextPage && <Loader position='bottom' />}
          <div id='watcher' ref={targetRef} />
        </>}
    </>
  )
}
