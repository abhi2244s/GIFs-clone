import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import GifContextProvider from './context/GifContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GifContextProvider>
        <App />
      </GifContextProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
