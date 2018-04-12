import React from 'react';

const Card = ({type}) => {
  const { name, pokemon } = type
  return (
    <div>
      <button>{name}</button>
    </div>
  )

}

export default Card