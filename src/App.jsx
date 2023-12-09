import { useState } from 'react'
import './App.css'
import Info from './Component/Info.jsx'
import Nav from './Component/Nav.jsx'
import data from './data.jsx'

function App() {
  const information = data.map( places => {
    return <Info
    {...places}
    // img={places.imageUrl} 
    // country={places.location}
    // title={places.title}
    // starttime={places.startDate}
    // endtime={places.endDate}
    // details={places.description}
    />
  } )
  return (
    <>
      <Nav />
      {information}
    </>
  )
}

export default App
