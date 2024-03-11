import './App.sass'
import { useState,useEffect } from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import TopAnime from './components/TopAnime/TopAnime'
import TopManga from './components/TopManga/TopManga'
import TopCharacters from './components/TopCharacters/TopCharacters'
import DetailAnime from './components/DetailAnime/DetailAnime'
import DetailManga from './components/DetailManga/DetailManga'
function App() {
  const [dataAnime,setDataAnime] = useState([])
  const [dataCheck,setDataCheck] = useState(false)
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/anime')
        .then((response)=> response.json())
        .then((response)=>setDataAnime(response))
        .catch((error)=>console.log(error))
        setTimeout(() => {
            if(dataAnime){
            setDataCheck(true)
            console.log(dataAnime)
            }
            else{
            setDataCheck(false)
            }
        }, 1500);
    },[])

  const router = createBrowserRouter([
    {
      path:"/",
      element:<TopAnime data={dataAnime.data} check={dataCheck}/>
    },
    {
      path:"/topManga",
      element:<TopManga/>
    },
    {
      path:"/topCharacters",
      element:<TopCharacters/>
    },{
      path:"/anime/:id",
      element:<DetailAnime data={dataAnime.data}/>
    },
    {
      path:"/manga/:id",
      element:<DetailManga/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
