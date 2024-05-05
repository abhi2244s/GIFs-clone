import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import SearchPage from './pages/SearchPage'
import GifPage from './pages/GifPage'
import Favourites from './pages/Favourites'

function App() {

  return (
    <>
      <div className='bg-gray-950 min-h-screen text-white'>
        <div className='container px-6 py-4 mx-auto'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:category' element={<Category />} />
            <Route path='/search/:query' element={<SearchPage />} />
            <Route path='/:type/:slug' element={<GifPage />} />
            <Route path='/favorites' element={<Favourites />} />
          </Routes>

        </div>

      </div>
    </>
  )
}

export default App
