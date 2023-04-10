import { useEffect, useState } from 'react'
import getGifs from '../services/getGifsService'

const INITIAL_PAGE_VALUE = 0
export default function useGifs ({ keyword, limit }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(INITIAL_PAGE_VALUE)

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword, limit })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
  }, [keyword])

  useEffect(() => {
    if (page === INITIAL_PAGE_VALUE) return

    setLoading(true)
    getGifs({ keyword, limit, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoading(false)
      })
  }, [page])

  return { gifs, loading, setPage }
}
