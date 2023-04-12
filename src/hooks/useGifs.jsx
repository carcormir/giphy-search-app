import { useEffect, useState } from 'react'
import getGifs from '../services/getGifsService'

const INITIAL_PAGE_VALUE = 0
export default function useGifs ({ keyword, limit }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE_VALUE)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword, limit })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE_VALUE) return

    setLoadingNextPage(true)
    getGifs({ keyword, limit, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [page, keyword, setGifs])

  return { gifs, loadingNextPage, loading, setPage }
}
