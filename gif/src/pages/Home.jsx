import React, { useEffect } from 'react'
import { GifContextState } from '../context/GifContext'
import Gif from '../components/Gif'
import FilterGif from '../components/FilterGif'

const Home = () => {
  const { giphyFetch, favorites, filter, setFilter, gif, setGif } = GifContextState()
  const fetchTrendingGif = async () => {
    const { data } = await giphyFetch.trending({ limit: 20, type: filter, rating: "g" })

    setGif(data)
  }
  useEffect(() => {
    fetchTrendingGif()
  }, [filter])
  return (
    <div>
      <img src='/banner.gif' alt='banner-gif' className='mt-2 rounded w-full' />

      <FilterGif showTrending/>


      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {gif.map((gf) => {
          return <Gif gif={gf} key={gf.title} />
        })}
      </div>
    </div>
  )
}

export default Home
