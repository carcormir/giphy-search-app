import { Link } from 'react-router-dom'
import React from 'react'

function Gif ({ title, id, url } = {}) {
  return (
    <div className='gif' key={id}>
      <Link to={`/gif/${id}`} className='gif-link'>
        <h4>{title}</h4>
        <img alt={title} src={url} />
      </Link>
    </div>
  )
}

export default React.memo(Gif)
