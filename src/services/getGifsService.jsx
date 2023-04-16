import { API_URL, API_KEY } from '../settings'

export default function getGifs ({
  keyword = 'morty',
  limit = 5,
  page = 0
}) {
  if (typeof keyword !== 'string') {
    return Promise.reject(new Error('Invalid keyword'))
  }
  if (typeof limit !== 'number' || limit < 1 || limit > 50) {
    return Promise.reject(new Error('Invalid limit'))
  }
  if (typeof page !== 'number' || page < 0) {
    return Promise.reject(new Error('Invalid page'))
  }

  const SEARCH_URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}`

  return fetch(SEARCH_URL)
    .then(res => res.json())
    .then(resJson => {
      const { data } = resJson
      if (!data || !data.length) {
        return Promise.reject(new Error('No results found'))
      }
      const gifs = data.map((gif) => {
        const { id, title } = gif
        const url = gif.images.downsized_medium?.url || ''
        return { title, id, url }
      })
      return gifs
    })
    .catch(err => {
      return Promise.reject(new Error(`Failed to get GIFs for keyword "${keyword}": ${err.message}`))
    })
}
