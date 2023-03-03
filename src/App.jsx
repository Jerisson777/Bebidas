import { useState } from 'react'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import CategoriasProvider from './Context/CategoriasContext'
import RecetasProvider from './Context/RecetasContext'
import ListaReceta from './Components/ListaReceta'
import ModalProvider from './Context/ModalContext'

function App() {

  return (
    <CategoriasProvider>
      <RecetasProvider> 
        <ModalProvider>

            <Header/>
            <div className='container mt-5'>
              <div className='row'>
                  <Formulario/>
              </div>
              <ListaReceta/>
            </div>

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  )
}

export default App
