import useGifs from '../../hooks/useGifs'
import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs ({ keyword, limit }) {
  const { gifs } = useGifs({ keyword, limit })

  return (
    <>
      <h1>Here we show the {keyword} gifs</h1>
      <main className='list-of-gifs'>
        {
            gifs.map(gif => {
              const { title, id, url } = gif
              return <Gif key={id} id={id} title={title} url={url} />
            })
          }
      </main>
    </>
  )
}
