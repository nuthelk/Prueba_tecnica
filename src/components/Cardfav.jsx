import React from 'react'

const Cardfav = ({name, gender,  city,  country,email,cell,id,picture,info,nat}) => {
  return (
    <div>
        <img src={picture} alt="" />
        <h1>Name: {name} </h1>
        <p>Gender: {gender} </p>
        <p>city: {city} </p>
        <p>country: {country} </p>
    </div>
  )
}

export default Cardfav