import { API_URL, API_KEY } from '../settings'

export default function getGifById ({
  id
}) {
  const SEARCH_URL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`

  return fetch(SEARCH_URL)
    .then(res => res.json())
    .then(resJson => {
      const { data } = resJson
      const { images, title, id } = data
      const { url } = images.downsized_medium
      return { title, id, url }
    })
}
