import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';

function App() {

  let count =7;

  return (
    <>
   <Counter count={count}/>
    </>
  )
}

export default App
