import axios from 'axios';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export const RecetasContext = createContext()

const RecetasProvider = (props) => {
    
    const [receta,setReceta] = useState([])
    const [busqueda,guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    const [consulta,setConsulta] = useState(false)

    const {nombre, categoria} = busqueda
    
    useEffect(() => {

        if(consulta) {
        const recetas = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
            const receta = await axios.get(url)
            setReceta(receta.data.drinks)
        }
        recetas()
        }
    }, [busqueda])

    return(
        <RecetasContext.Provider value = {{
            receta,
            guardarBusqueda,
            setConsulta
        }}>
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider