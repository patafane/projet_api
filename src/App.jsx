import './App.sass'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import TopAnime from './components/TopAnime/TopAnime'
import TopManga from './components/TopManga/TopManga'
import TopCharacters from './components/TopCharacters/TopCharacters'
import DetailAnime from './components/DetailAnime/DetailAnime'
import DetailManga from './components/DetailManga/DetailManga'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<TopAnime/>
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
      element:<DetailAnime/>
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
