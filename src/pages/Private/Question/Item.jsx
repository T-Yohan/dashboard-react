import React from 'react'
import {useState,useEffect} from 'react'
import { getOneById } from '../../../commonjs/db';



const Item = ({Question}) => {

const [category,setCategory] = useState({});
const getCategory = async() => {
  const dataCategory = await getOneById('category',Question.category);
  setCategory(dataCategory);
}
useEffect(() => {

getCategory();

}, [])

  return (
    <tr>
    <th>{category?.name}</th>
    <td>{Question?.question}</td>
    <td></td>
    <td></td>
  </tr>
  )
}

export default Item