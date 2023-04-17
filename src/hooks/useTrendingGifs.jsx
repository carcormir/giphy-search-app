import { useEffect, useState } from 'react'
import getTrendingGifs from '../services/getTrendingGifsService'

const INITIAL_PAGE_VALUE = 0
export default function useTrendingGifs ({ limit }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE_VALUE)

  useEffect(() => {
    setLoading(true)
    getTrendingGifs({ limit })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE_VALUE) return

    setLoadingNextPage(true)
    getTrendingGifs({ page, limit })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [page, setGifs])

  return { gifs, loadingNextPage, loading, setPage }
}
