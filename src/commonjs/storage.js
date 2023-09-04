import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";



export const upload = async (file) => {
  try {
    
  //création de la ref 
  const imageRef = ref(storage, `images/${file.name}`);

  //enregistrement du fichier sur firestorage
  const snapShot = await uploadBytes(imageRef, file);

//recupération de l'url
  const url = await getDownloadURL(snapShot.ref);

return url ;

} catch (error) {
    return null ;
}
}