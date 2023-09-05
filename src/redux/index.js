import {configureStore} from "@reduxjs/toolkit";
import { sliceCompteur } from "./CompteurStore";
import { sliceUser } from "./userStore";

//exportation des actions
export const {plus, moins} = sliceCompteur.actions;
export const {initUser , resetUser} = sliceUser.actions;
//export const {mes fonctions(fonction1,fonction2,...)} = mon slice;

//exportation du store
export const store = configureStore({
  reducer : {
    compteur : sliceCompteur.reducer,
    user : sliceUser.reducer,
    //mon reducer : mon slice.reducer
  }
})
