import React, { useState } from 'react'
import {addDataToCollection} from '../../../commonjs/db'
const Ajouter = () => {
//initialisation de l'input
const[catName,setCatName] = useState("");
//recupération et mise à jour de la donnée de l'input
const handleChangeCategory = (event) => {
  setCatName(event.target.value)
}
//sauvegarde en base de donnée
const save = async() => { 
if(catName!=""){
console.log('save')

const data = {name : catName} //formatage de la data
await addDataToCollection("category",data);

setCatName("");
}  else{
    console.log('not save')
  }
  }

  return (
    <div className='flex flex-row gap-4'>
      <input name='formCategory' value={catName} onChange={handleChangeCategory} type='text'placeholder='Ajouter une catégorie'/>
      <button onClick={save} className='btn' >Enregistrer</button>
    </div>
  )
}

export default Ajouter