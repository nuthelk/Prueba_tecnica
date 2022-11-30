import React from 'react'

const Cardfav = ({name, gender,  city,  country,email,cell,id,picture,info,nat, borrar, idx}) => {
  return ( 
    <div className='mb-4 shadow-md p-4 flex flex-col items-center bg-slate-100' id={idx}>
        <img src={picture} alt="" />
        <h1>Name: {name} </h1>
        <p>Gender: {gender} </p>
        <p>city: {city} </p>
        <p>country: {country} </p>
        <button className='p-2 rounded-md bg-red-400' onClick={(e)=>borrar(e)} id={idx}>Borrar</button>
    </div>
  )
}

export default Cardfav