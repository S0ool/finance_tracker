import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from "./components/body.jsx";

function App() {
  function log(event){
    console.log(event.target.value)
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    let month = currentDate.getMonth() + 1
    const day = currentDate.getDate()
    if (month<10){
      month = `0${month}`
    }
    console.log(`${day}-${month}-${year}`)
  }
  return (
    <>
      {/*<input type={'date'} onInput={()=>log(event)}/>*/}
      <Body/>
    </>
  )
}

export default App
