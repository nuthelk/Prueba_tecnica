import React from 'react'

const Cards = ({name, gender, location, city, state, country, postcode,coordinates,timezone,email,login,dob,registered, phone,cell,id,picture,info,nat}) => {
  return (
    <div className='shadow-md p-4 flex flex-col items-center bg-slate-100'>
        <img src={picture} alt="" />
        <h1>Name: {name} </h1>
        <p>Gender: {gender} </p>
        <p>location: {location} </p>
        <p>city: {city} </p>
        <p>state: {state} </p>
        <p>country: {country} </p>
        <p>postcode: {postcode} </p>
        <p>coordinates: {coordinates} </p>
        <p>email: {email} </p>
        <p>dob: {dob} </p>
        <p>login: {login} </p>
        <p>registered: {registered} </p>
        <p>phone: {phone} </p>
        <p>cell: {cell} </p>
        <p>timezone: {timezone} </p>
        <p>nat: {nat} </p>

    </div>
  )
}

export default Cards