import Navbar from "../Navbar/Navbar"
import { useState,useEffect} from "react"
import "./TopAnime.sass"
import Card from "../Card/Card"
let TopAnime = () =>{
    const [animeFilter, setAnimeFilter] = useState([])
    const [searchValue,setSearchValue] = useState("")
    const [selectValue,setSelectValue] = useState("toutes")
    const [dataAnime,setDataAnime] = useState([])
    const [dataCheck,setDataCheck] = useState(false)
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/anime')
        .then((response)=> response.json())
        .then((response)=>setDataAnime(response))
        .then(()=>setDataCheck(true))
        .catch((error)=>console.log(error))
    },[])
    let handleSearch = (e)=>{
        setSearchValue(e.target.value)
        setAnimeFilter(dataAnime.data.filter(element=>element.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
    }
    let handleSelect = (e)=>{
        setSelectValue(e.target.value)
        if(e.target.value === "-12"){
            setAnimeFilter(dataAnime.data.filter(element=>element.episodes<12))
        }else if(e.target.value === "-24"){
            setAnimeFilter(dataAnime.data.filter(element=>element.episodes<24))
        }else if(e.target.value === "24+"){
            setAnimeFilter(dataAnime.data.filter(element=>element.episodes>=24))
        }else{
            setAnimeFilter(dataAnime.data.filter(element=>element.episodes>0))
        }
    }
    return(
        <div className="topAnime">
            <Navbar/>
            <div className="content">
                <div className="inputs">
                    <input type="search" onChange={handleSearch}/>
                    <select name="range" id="range" onChange={handleSelect}>
                        <option value="toutes">toutes</option>
                        <option value="-12">12 épisodes ou moins</option>
                        <option value="-24">24 épisodes ou moins</option>
                        <option value="24+">plus de 24 épisodes</option>
                    </select>
                </div>
                <div className="animes">
                    {dataCheck === true && searchValue === "" && selectValue === "toutes" ? 
                    dataAnime.data.map((element,index)=>(
                        <Card key={index} image={element.images.jpg.image_url} titre={element.title} episodes={element.episodes} score={element.score} studio={element.studios[0].name} link={"/anime/"+element.mal_id}/>
                    ))
                    : dataCheck === true && searchValue != "" || selectValue != "toutes" ? animeFilter.map((element,index)=>(
                        <Card key={index} image={element.images.jpg.image_url} titre={element.title} episodes={element.episodes} score={element.score} studio={element.studios[0].name} link={"/anime/"+element.mal_id}/>
                    )) : <h1>Loading</h1>}
                </div>
            </div>
        </div>
    )
}
export default TopAnime