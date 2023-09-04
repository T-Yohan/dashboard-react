import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'




function App() {

const compteur = useSelector(state => state.compteur);
  return (
    <>
      <div>Compteur :{compteur}</div> 
    </>
  )
}

export default App
