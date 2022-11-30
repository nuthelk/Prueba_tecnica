import { useEffect, useState } from 'react'
import './App.css'
import Cardfav from './components/Cardfav'
import Cards from './components/Cards'
import { getData } from './helper/axios'

function App() {
  const url = "https://randomuser.me/api/"
  const [data, setData] = useState()
  const favoritos = JSON.parse(sessionStorage.getItem("favoritos"))
  const [bandera, setBandera] = useState(false)
  const [indice, setIndice] = useState(0)
  const [array, setArray] = useState(favoritos)




  

  useEffect(() => {
    getData(setData, url)

  }, [bandera])



  const handleGenerar = () => {
    setBandera(!bandera)
  }

  const borrar = ({target}) =>{
    const newArray = array.filter(e => e.name != target.id)
    sessionStorage.setItem('favoritos', JSON.stringify(newArray))
    setArray(newArray)
    
  }

  const objeto = {
    name:  data?.results[0].name.title + " " + data?.results[0].name.first + " " + data?.results[0].name.last ,
    gender:  data?.results[0].gender ,
    location: data?.results[0].location.street.number + " " + data?.results[0].location.street.name,
    city:  data?.results[0].location.city ,
    state:  data?.results[0].location.state ,
    country:  data?.results[0].location.country ,
    postcode:  data?.results[0].location.postcode ,
    coordinates:  data?.results[0].location.coordinates.latitude + " " + data?.results[0].location.coordinates.longitude ,
    timezone:  data?.results[0].location.timezone.offset + " " + data?.results[0].location.timezone.description ,
    email: data?.results[0].email ,
    login:  " username: " + data?.results[0].login.username + " password: " + data?.results[0].login.password ,
    dob:  data?.results[0].dob.date + " " + data?.results[0].dob.age ,
    phone:  data?.results[0].phone ,
    cell:  data?.results[0].cell ,
    picture:  data?.results[0].picture.large ,
    nat:  data?.results[0].nat 
  }
  

  const handleFav = () => {
    
    
    setIndice(indice+1) 
    handleGenerar()
    setArray([...array, objeto])

    session()
    
  }

  const session = () =>{
    sessionStorage.setItem('favoritos', JSON.stringify(array))
  }

  return (
    <div className='p-4'>
      <div className='flex justify-around '>
        <div>
          <button className='bg-blue-400 rounded-md p-2 ml-4 mt-4' onClick={handleGenerar}>Generar</button>
          <h1 className='text-4xl font-bold mb-4'>Resultado:</h1>
          {
            data &&
            data.results.map(e => (
              <Cards key={e.name.title}
                name={e.name.title + " " + e.name.first + " " + e.name.last}
                gender={e.gender}
                location={e.location.street.number + " " + e.location.street.name}
                city={e.location.city}
                state={e.location.state}
                country={e.location.country}
                postcode={e.location.postcode}
                coordinates={e.location.coordinates.latitude + " " + e.location.coordinates.longitude}
                timezone={e.location.timezone.offset + " " + e.location.timezone.description}
                email={e.email}
                login={" username: " + e.login.username + " password: " + e.login.password}
                dob={e.dob.date + " " + e.dob.age}
                phone={e.phone}
                cell={e.cell}
                picture={e.picture.large}
                nat={e.nat}

              />
            ))
          }
          <button className='bg-blue-400 rounded-md p-2 ml-4 mt-4' onClick={handleFav}>Add Fav</button>
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-4 mt-8'>Favoritos:</h1>
          {
            array.length > 0 &&
            array.map(e => (
              <Cardfav key={e.name}
                name={e.name}
                gender={e.gender}
                city={e.city}
                state={e.state}
                country={e.country}
                email={e.email}
                cell={e.cell}
                picture={e.picture}
                borrar = {borrar}
                idx={e.name}
              />
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default App
