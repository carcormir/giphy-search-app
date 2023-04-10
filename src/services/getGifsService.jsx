import { API_URL, API_KEY } from '../settings'

export default function getGifs ({ keyword, limit }) {
  const SEARCH_URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}`
  return fetch(SEARCH_URL)
    .then(res => res.json())
    .then(resJson => {
      const { data } = resJson
      // TODO: Check if there is any data
      const gifs = data.map((gif) => {
        const { id, title } = gif
        const { url } = gif.images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}
