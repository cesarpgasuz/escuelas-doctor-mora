import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const plantas = [
    {
      id: 1,
      nombre: "Rosa",
      descripcion: "ros 1."
    },
    {
      id: 2,
      nombre: "Orquídea",
      descripcion: "orquidea 2"
    },
    {
      id: 3,
      nombre: "Suculenta",
      descripcion: "sucu 3"
    }
  ];

  const copiarDescripcion = (descripcion) => {
    navigator.clipboard.writeText(descripcion)
      .then(() => {
        toast.success('Texto Copiado')
      })
      .catch(err => {
        console.error('Error al copiar la descripción: ', err);
      });
  }



  return (
    <div>
      <Toaster />
      {plantas.map(planta => (
        <div key={planta.id} className="tarjeta">
          <h2>{planta.nombre}</h2>
          <p>{planta.descripcion}</p>
          <button onClick={() => copiarDescripcion(planta.descripcion)}>Copiar Descripción</button>
        </div>
      ))}
    </div>
  )
}

export default App
