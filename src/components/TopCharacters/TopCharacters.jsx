import CharacterDetails from "../CharacterDetails/CharacterDetails"
import Navbar from "../Navbar/Navbar"
import "./TopCharacters.sass"
import {useState,useEffect} from "react"
let TopCharacters = () =>{
    const [dataCheck,setDatacheck] = useState()
    const [dataCharacters,setDataCharacters] = useState(null)
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/characters')
        .then((response)=>response.json())
        .then((response)=>setDataCharacters(response))
        .then(()=>console.log(dataCharacters))
        .then(()=>setDatacheck(true))
        .catch((error)=>console.log(error))
    },[])
    const [charactersFIlter,setCharactersFilter] = useState([])
    const [searchValue,setSearchValue] = useState("")
    let handleSearch = (e)=>{
        setSearchValue(e.target.value)
        setCharactersFilter(dataCharacters.data.filter(element=>element.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
    }
    return(
        <div className="topCharacters">
            <Navbar/>
            <div className="content">
                <div className="inputs">
                    <input type="search" onChange={handleSearch}/>
                </div>
                <div className="characters">
                    {dataCheck===true  && searchValue === "" ? dataCharacters.data.map((element,index)=>(
                        <CharacterDetails key={index} image={element.images.jpg.image_url} nom={element.name} nickname={element.nicknames}/>
                    )) : 
                    dataCheck === true && searchValue != "" ?
                    charactersFIlter.map((element,index)=>(
                        <CharacterDetails key={index} image={element.images.jpg.image_url} nom={element.name} nickname={element.nicknames}/>
                    )): <h1>Loading</h1>}
                </div>
            </div>
        </div>
    )
}
export default TopCharacters