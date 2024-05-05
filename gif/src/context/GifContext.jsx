import { createContext, useContext, useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api'
const GifContext = createContext()

const GifContextProvider = ({ children }) => {
    console.log(import.meta.env.VITE_GIF_API_KEY , "api key")
    const giphyFetch = new GiphyFetch(import.meta.env.VITE_GIF_API_KEY)
    const [gif, setGif] = useState([])
    const [filter, setFilter] = useState('gifs')
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (id) => {
        console.log(id);
        if (favorites.includes(id)) {
          // If the item is already in favorites, remove it
          const updatedFavorites = favorites.filter((itemId) => itemId !== id);
          localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
          setFavorites(updatedFavorites);
        } else {
          // If the item is not in favorites, add it
          const updatedFavorites = [...favorites];
          updatedFavorites.push(id);
          localStorage.setItem("favoriteGIFs", JSON.stringify(updatedFavorites));
          setFavorites(updatedFavorites);
        }
      };
    return (
        <GifContext.Provider value={{ giphyFetch , favorites ,  filter ,setFilter , gif  ,setGif  ,addToFavorites }}>
            {children}
        </GifContext.Provider>
    )
}


export const GifContextState = () => {
    return useContext(GifContext)
}

export default GifContextProvider