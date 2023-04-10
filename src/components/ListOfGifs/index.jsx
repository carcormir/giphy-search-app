import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs ({ gifs }) {
  return (
    <>
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
