import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [Count,setCount]=useState(0)
  // let Count=0;
  const increase=()=>{
    console.log("increase",Count)
   setCount(Count+1)
  }
  const decrease=()=>{
    setCount(Count-1)
  }
return(
  <>
     <h1>Counter App</h1>
     <h2>Counter :{Count} </h2><br/>
     <button onClick={increase}>Increment</button><br/>
     <button onClick={decrease}>Decrement</button>
     
    </>
  )
}

export default App
