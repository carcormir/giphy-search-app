import { API_URL, API_KEY } from '../settings'

export default function getGifById ({
  id
}) {
  const SEARCH_URL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`

  if (!id) {
    return Promise.reject(new Error('No ID provided'))
  }
  return fetch(SEARCH_URL)
    .then(res => res.json())
    .then(resJson => {
      const { data } = resJson
      const { images, title, id } = data
      const { url } = images.downsized_medium?.url || ''
      return { title, id, url }
    })
    .catch(err => {
      return Promise.reject(new Error(`Failed to get GIF by ID ${id}: ${err.message}`))
    })
}
