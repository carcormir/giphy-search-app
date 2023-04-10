import { useEffect, useState } from 'react'
import getGifs from '../services/getGifsService'

export default function useGifs ({ keyword, limit }) {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword, limit })
      .then(gifs => setGifs(gifs))
  }, [keyword])

  return { gifs }
}
