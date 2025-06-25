import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [state,setState] = useState(false);
  

  return (
    <>
      <button onClick={()=>{setState(prev=>!prev)}}>{state?"OFF":"ON"}</button>
      <p style={{background:state?"green":"red"}}>The Button is {state?"Active":"Not Active"}</p>
    </>
  )
}

export default App
