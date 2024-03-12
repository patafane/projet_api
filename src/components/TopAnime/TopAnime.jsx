import Navbar from "../Navbar/Navbar"
import { useState} from "react"
import "./TopAnime.sass"
import Card from "../Card/Card"
let TopAnime = (props) =>{
    const [animeFilter, setAnimeFilter] = useState([])
    const [searchValue,setSearchValue] = useState("")
    const [selectValue,setSelectValue] = useState("toutes")
    let handleSearch = (e)=>{
        setSearchValue(e.target.value)
        setAnimeFilter(props.data.filter(element=>element.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
        console.log(animeFilter);
    }
    let handleSelect = (e)=>{
        setSelectValue(e.target.value)
        if(e.target.value === "-12"){
            setAnimeFilter(props.data.filter(element=>element.episodes<12))
        }else if(e.target.value === "-24"){
            setAnimeFilter(props.data.filter(element=>element.episodes<24))
        }else if(e.target.value === "24+"){
            setAnimeFilter(props.data.filter(element=>element.episodes>=24))
        }else{
            setAnimeFilter(props.data.filter(element=>element.episodes>0))
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
                    {props.check === true && searchValue === "" && selectValue === "toutes" ? 
                    props.data.map((element,index)=>(
                        <Card key={index} image={element.images.jpg.image_url} titre={element.title} episodes={element.episodes} score={element.score} studio={element.studios[0].name} link={"/anime/"+element.mal_id}/>
                    ))
                    : props.check === true && searchValue != "" || selectValue != "toutes" ? animeFilter.map((element,index)=>(
                        <Card key={index} image={element.images.jpg.image_url} titre={element.title} episodes={element.episodes} score={element.score} studio={element.studios[0].name} link={"/anime/"+element.mal_id}/>
                    )) : <h1>Loading</h1>}
                </div>
            </div>
        </div>
    )
}
export default TopAnime