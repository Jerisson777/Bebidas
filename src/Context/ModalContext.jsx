import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ModalContext = createContext()

const ModalProvider = (props) => {

    const [idreceta, setIdReceta] = useState(null)
    const [informacion, guardarReceta] = useState({})
    //llamar la api
    useEffect(() => {
        const consultarApi = async () => {
            if(!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`

            const resultado = await axios.get(url)
            guardarReceta(resultado.data.drinks[0])
        }
        consultarApi()
    }, [idreceta])
    return(
        <ModalContext.Provider value = {{
            informacion,
            setIdReceta,
            guardarReceta
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider