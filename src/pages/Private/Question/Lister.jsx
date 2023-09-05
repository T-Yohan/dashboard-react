import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getAll } from '../../../commonjs/db';

const Lister = () => {

const [Questions,setQuestions] = useState([]);

const initData = async() => {
const dataTemp = await getAll('questions');
setQuestions(dataTemp);
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
        <th>Cat.</th>
        <th>Question</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{Questions?.map(data => <Item key={data.id} Question={data}/>  )}

    </tbody>
  </table>
</div>
  )
}

export default Lister