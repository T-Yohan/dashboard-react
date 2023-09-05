import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getAll } from '../../../commonjs/db';

const Lister = () => {

const [categories,setCategories] = useState([]);

const initData = async() => {
const dataTemp = await getAll('category');
setCategories(dataTemp);
}

useEffect(()=>{
  initData();
},[]);


  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{categories?.map(data => <Item key={data.id} Category={data}/>  )}

    </tbody>
  </table>
</div>
  )
}

export default Lister