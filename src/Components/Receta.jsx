import React, { useContext, useState } from 'react'
import { ModalContext } from '../Context/ModalContext'
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({receta}) => {

  //configuracion del modal de material ui
  const [ modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const classes  = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () =>{
    setOpen(false)
  }

  const { strDrink, strDrinkThumb, idDrink} = receta

  //extraer valores del context
  const {setIdReceta, informacion, guardarReceta} = useContext(ModalContext)
 
  //muestra los ingredientes
  const mostrarIngredientes = informacion => {
    let ingredientes = [];
    for(let i = 1; i < 16; i++){
      if(informacion[`strIngredient${i}`]){
        ingredientes.push(
          <li> {informacion[`strIngredient${i}`]} {informacion[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes
  }

  return (
    <div className='col-md-4 mb-3'>
        <div className='card'>
            <h2 className='card-header'>{strDrink}</h2>
            <img className='card-img-top' src={strDrinkThumb} alt = {`Imagen de ${strDrink}`}/>
            
            <div className='card-body'>
                <button
                  type='button'
                  className='btn btn-block btn-primary'
                  onClick={() => {
                    setIdReceta(idDrink)
                    handleOpen()
                  }}
                >Ver Receta</button>
                <Modal
                  open = {open}
                  onClose={() => {
                    setIdReceta(null)
                    guardarReceta({})
                    handleClose()
                  }}
                >
                  <div className={classes.paper} style = {modalStyle}>
                      <h2>{informacion.strDrink}</h2>
                      <h3 className='mt-4'>Instrucciones</h3>
                      <p>{informacion.strInstructions}</p>
                      <img className='img-fluid my-4' src = {informacion.strDrinkThumb}/>
                      <h3>Ingredientes y Cantidades</h3>
                      <ul>
                        {mostrarIngredientes(informacion)}
                      </ul>
                  </div>
                </Modal>
            </div>
        </div>
    </div>
  )
}

export default Receta
