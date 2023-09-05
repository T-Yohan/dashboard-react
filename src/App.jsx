import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Public from './pages/Public'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { initUser, resetUser } from './redux'
import Private from './pages/Private'




function App() {
const dispatch = useDispatch();

// const compteur = useSelector(state => state.compteur);


const userId = useSelector(state => state.user);

//abonnement au statut d'utilisateur dans firebase
onAuthStateChanged(auth,user=>{
  if(user){
    //je suis connecté
    dispatch(initUser(user.uid));
  }else{
    //je suis déconnecté
    dispatch(resetUser());
  }
})
  return (
    <>
    {userId?<Private/> : <Public/>}
    </>
  )
}

export default App
