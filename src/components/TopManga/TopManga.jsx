import Navbar from "../Navbar/Navbar"
import { useState,useEffect } from "react"
import "./TopManga.sass"
import Card from "../Card/Card"
let TopManga = () =>{
    const [dataManga,setDataManga] = useState([])
    const [mangaCheck,setMangaCheck] = useState(false)
    useEffect(()=>{
    fetch("https://api.jikan.moe/v4/manga")
    .then((response)=>response.json())
    .then((response)=> setDataManga(response))
    .then(()=>setMangaCheck(true))
    .catch((error)=>console.log(error))
    },[])
    console.log(dataManga);
    return(
        <div className="topManga">
            <Navbar/>
            <div className="content">
                {mangaCheck === true ? dataManga.data.map((element,index)=>(
                    <Card key={index} image={element.images.jpg.image_url} titre={element.title} volumes={element.volumes} authors={element.authors[0].name} score={element.score} link={"/manga/"+element.mal_id}/>
                )) : <h1>Loading</h1>}
            </div>
        </div>
    )
}
export default TopManga