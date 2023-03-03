import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './Bootstrap.min.css'
import App from './App'
import CategoriasProvider from './Context/CategoriasContext'
import RecetasProvider from './Context/RecetasContext'
import ModalProvider from './Context/ModalContext'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
