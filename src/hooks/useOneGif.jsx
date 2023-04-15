import { useEffect, useState } from 'react'
import getGifById from '../services/getGifByIdService'

export default function useOneGif ({ id }) {
  const [gif, setGif] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    getGifById({ id })
      .then(newGif => {
        console.log(newGif)
        setGif(newGif)
        setLoading(false)
      }).catch(err => {
        setLoading(false)
        setError(true)
      })
  }, [id, setGif])

  return { gif, loading, error }
}
