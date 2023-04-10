import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'

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

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
