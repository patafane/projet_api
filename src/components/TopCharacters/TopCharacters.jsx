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
    console.log(dataCharacters);
    return(
        <div className="topCharacters">
            <Navbar/>
            <div className="content">
                {dataCheck ? dataCharacters.data.map((element,index)=>(
                    <CharacterDetails key={index} image={element.images.jpg.image_url} nom={element.name} nickname={element.nicknames}/>
                )) : <h1>Loading</h1>}
            </div>
        </div>
    )
}
export default TopCharacters