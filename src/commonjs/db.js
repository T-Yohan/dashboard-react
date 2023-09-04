import { dbFirestore } from "../firebase";
import {doc,getDoc,getDocs,query,collection,addDoc} from 'firebase/firestore'


/*
Create by : Master GUGU
séléctionner un élément à partir de son id dans une collection
param : 
collectionName "nom de la collection"
id  "id de la collection"
*/



export const getOneById = async(collectionName , id) => { 
  const rq = doc(dbFirestore, collectionName, id);
  const snapShot = await getDoc(rq);
  if (snapShot.exists) {
    return snapShot.data();
}else{
  return null;
}
// return snapShot.exists? snapShot.data():null;
}


/*
Create by : Master GUGU
séléctionner tout les éléments à partir de la collection
param : 
collectionName "nom de la collection"
*/

export const getAll = async (collectionName) => {

  //préparation de la requête

  const rq = query(collection(dbFirestore, collectionName));
  //lancement de la requête
  const snapShot = await getDocs(rq);

  //tester que le tableau n'est pas vide
  if (!snapShot.empty) {
    const dataTemp = snapShot.docs.map (item => {
      return { id: item.id, ...item.data() };
      //mise à jour de tasks
    });
    return dataTemp;
  }else{
    return [];
  }
};


/*****
 * 
 * 
 * 
 */

export const addDataToCollection = async(collectionName , data) =>{

return await addDoc(collection(dbFirestore, collectionName), data);


}