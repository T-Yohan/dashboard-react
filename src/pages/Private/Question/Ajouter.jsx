import React, { useEffect, useState } from "react";
import { addDataToCollection, getAll } from "../../../commonjs/db";

const Ajouter = () => {
  //initialisation de l'input
  const [askName, setAskName] = useState("");
  const [categories,setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("");
  //recupération et mise à jour de la donnée de l'input
  const handleChangeQuestion = (event) => {
    setAskName(event.target.value);
  };
//trace les changements de l'input
const handleDropCategory = (event) => {
  setSelectedCategory(event.target.value);
}

  //sauvegarde en base de donnée
  const save = async () => {
    if (askName !='' && selectedCategory !='') {
      console.log("save");

      const data = { 
                    category: selectedCategory,
                    question: askName }; //formatage de la data
      await addDataToCollection("questions", data);

      setAskName("");
    } else {
      console.log("not save");
    }
  };
//gestion des catégories


const initData = async() => {
const dataTemp = await getAll('category');
setCategories(dataTemp);
}

useEffect(()=>{
  initData();
},[]);

  return (
    <div className="flex flex-row gap-4">
      <select value={selectedCategory} onChange={handleDropCategory} className="select select-bordered w-full max-w-xs">
      <option defaultValue={''}>Selectionnez une categorie</option>
  {categories?.map(data=><option key={data.id} value={data.id}>{data.name}</option>)};

</select>
      <input
        value={askName}
        onChange={handleChangeQuestion}
        type="text"
        placeholder="Ajouter une question"
      />
      <button onClick={save} className="btn">
        Envoyer
      </button>
    </div>
  );
};

export default Ajouter;
