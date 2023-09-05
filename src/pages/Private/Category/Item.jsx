import React from 'react'

const Item = ({Category}) => {
  return (
    <tr>
    <th></th>
    <td>{Category?.name}</td>
    <td></td>
    <td></td>
  </tr>
  )
}

export default Item