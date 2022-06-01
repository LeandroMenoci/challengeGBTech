import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoute from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <AppRoute />
    </div>
  </React.StrictMode>
)
