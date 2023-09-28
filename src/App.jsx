import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

function App() {
  //se utiliza un state para procesar el estado error según el requerimiento 5.3
  const [mensaje, setMensaje] = useState({
    msg: '',
    color: '',
  })

  const mostrarValidacion = (mensajeValidacion) => {
    setMensaje(mensajeValidacion)
  }

  return (
    <>
    <Registro
      validacion={mostrarValidacion}
      mensaje={mensaje}
    />
    </>
  )
}

export default App
