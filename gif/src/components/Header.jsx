import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2"
import { GifContextState } from '../context/GifContext'
import GifSearch from './GifSeach'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [showCategories, setShowCategories] = useState(false)

  const { giphyFetch, favorites, filter, setFilter, gif, setGif } = GifContextState()

  const fetchGifCatgories = async () => {
    const { data } = await giphyFetch.categories()
    console.log(data, "data")
    setCategories(data)
  }

  useEffect(() => {
    fetchGifCatgories()
  }, [])
  return (
    <nav>
      <div className='relative flex gap-4 justify-between items-center mb-2'>
        <Link to='/' className='flex gap-2'>
          <img src='/logo.svg' alt='logo' className='w-8' />
          <h1 className='text-5xl tracking-tight font-bold cursor-pointer'>GIFs</h1>
        </Link>

        {/* rendering category */}

        <div className='font-bold  text-md  flex gap-2 items-center'>

          {categories.slice(0, 5)?.map((category) => {
            return (
              <Link key={category.name} to={`/${category.name_encoded}`} className='px-4 py-1 hover:gradient border-b-4 hidden lg:block'>
                {category.name}
              </Link>
            )
          })}
          {/* <Link className='px-4 py-1 hover:gradient border-b-4 hidden lg:block' >
            Reaction
          </Link> */}
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical size={35} className={`py-0.5 hover:gradient ${showCategories ? "gradient" : ""} border-b-4 hidden lg:block`} />
          </button>

          {favorites.length > 0 && <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to="/favorites">Favorite GIFs</Link>
          </div>
          }
          <button>
            <HiMiniBars3BottomRight className='text-sky-400 block lg:hidden' size={30} />
          </button>


          {showCategories && (
            <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
              <span className="text-3xl font-extrabold">Categories</span>
              <hr className="bg-gray-100 opacity-50 my-5" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {categories?.map((category) => {
                  return (
                    <Link
                      onClick={() => setShowCategories(false)}
                      className="transition ease-in-out font-bold"
                      key={category.name}
                      to={`/${category.name_encoded}`}
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gif Search */}
      <GifSearch/>
    </nav>
  )
}

export default Header
