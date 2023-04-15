import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'
import Detail from './pages/Detail'
import Error from './pages/Error'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to='/'>
          <h1 className='main-title'>Giphy Search App</h1>
        </Link>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/search/:keyword'
            element={<Search />}
          />
          <Route
            path='/gif/:id'
            element={<Detail />}
          />
          <Route
            path='/404'
            element={<Error />}
          />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
