import './App.sass'
import { useState,useEffect } from 'react'
function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://docs.api.jikan.moe/')
  },[])
  return (
    <div className="App">
    </div>
  )
}

export default App
