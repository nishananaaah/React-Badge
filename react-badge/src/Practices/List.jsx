import React from 'react'

const List = (props) => {
    const listItems = props.colors.map((color)=>
        <li key={color}>{color}</li>
    )
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

export default List
