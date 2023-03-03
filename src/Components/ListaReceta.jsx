import React, { useContext } from 'react'
import { RecetasContext } from '../Context/RecetasContext'
import Receta from './Receta'

const ListaReceta = () => {
    
    //extraer las recetas
    const {receta} = useContext(RecetasContext)
    
    return (
        <div className='row mt-5'>
            {receta.map(receta =>(
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    )
}

export default ListaReceta
