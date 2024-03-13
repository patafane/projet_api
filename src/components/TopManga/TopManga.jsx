import Navbar from "../Navbar/Navbar"
import { useState,useEffect } from "react"
import "./TopManga.sass"
import Card from "../Card/Card"
let TopManga = () =>{
    const [dataManga,setDataManga] = useState([])
    const [mangaCheck,setMangaCheck] = useState(false)
    const [mangaFIlter,setMangaFilter] = useState([])
    const [searchValue,setSearchValue] = useState("")
    let handleSearch = (e)=>{
        setSearchValue(e.target.value)
        setMangaFilter(dataManga.data.filter(element=>element.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
    }
    useEffect(()=>{
    fetch("https://api.jikan.moe/v4/manga")
    .then((response)=>response.json())
    .then((response)=> setDataManga(response))
    .then(()=>setMangaCheck(true))
    .catch((error)=>console.log(error))
    },[])
    return(
        <div className="topManga">
            <Navbar/>
            <div className="content">
            <div className="inputs">
                <input type="search" onChange={handleSearch}/>
            </div>
                <div className="mangas">
                    {mangaCheck === true && searchValue === ""? dataManga.data.map((element,index)=>(
                        <Card key={index} image={element.images.jpg.image_url} titre={element.title} volumes={element.volumes} authors={element.authors[0].name} score={element.score} link={"/manga/"+element.mal_id}/>
                    )) :
                    mangaCheck === true && searchValue != "" ? 
                    mangaFIlter.map((element,index)=>(
                        <Card key={index} image={element.images.jpg.image_url} titre={element.title} volumes={element.volumes} authors={element.authors[0].name} score={element.score} link={"/manga/"+element.mal_id}/>
                    )) :<h1>Loading</h1>}
                </div>
            </div>
        </div>
    )
}
export default TopManga