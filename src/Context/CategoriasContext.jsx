import axios from 'axios';
import React, { createContext, useState, useEffect} from 'react'

//crear Context
export const CategoriasContext = createContext();

//provider es donde se encuentran las funciones y states
const CategoriasProvider = (props) => {

    const [categorias,setCategorias] = useState([])

    useEffect(() => {
        const consultarCategoriasApi = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categorias = await axios.get(url)

            setCategorias(categorias.data.drinks)
        }
        consultarCategoriasApi()
    }, [])

    return(
        <CategoriasContext.Provider value = {{
            categorias
        }}>
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;