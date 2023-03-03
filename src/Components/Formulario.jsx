import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../Context/CategoriasContext'
import { RecetasContext } from '../Context/RecetasContext'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const [error, setError] = useState(false)

    const {categorias} = useContext(CategoriasContext)
    const {guardarBusqueda, setConsulta} = useContext(RecetasContext)

    //funcion para obtener datos
    const obtenerReceta = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    //funcion del submit
  /*  const handleSubmit = e 

        //validar form
        if(nombre.trim() === '' || categoria.trim() === ''){
            setError(true)
            return
        }
        setError(false)
    }*/

    return (
        <form
            onSubmit={ e => {
                e.preventDefault()
                setConsulta(true)
                guardarBusqueda(busqueda)}
            
            }

            className='col-12'
        >
            
            <fieldset className='text-center'>
                <legend>Busca bebidas por Categorias o ingredientes</legend>
            </fieldset>       

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        type="text"
                        className='form-control'
                        name='nombre'
                        placeholder='Buscar por Ingredientes'
                        onChange={obtenerReceta}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obtenerReceta}
                    >
                        <option value = "">-- Selecciona Categoria --</option>
                        {categorias.map(categoria => (
                            <option key = {categoria.strCategory} value = {categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type="submit"
                        className='btn btn-block btn-primary'
                        value="Buscar Bebidas"
                    />
                </div>
            </div>     
        </form>
    )
}

export default Formulario
