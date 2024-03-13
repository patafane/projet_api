import "./DetailManga.sass"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { FaStar } from "react-icons/fa6";
let DetailManga = () =>{
    const indexParams = useParams()
    const [mangaData,setMangaData] = useState(null)
    const [check,setCheck] = useState(false)
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/manga/'+indexParams.id+'/full')
        .then((response)=>response.json())
        .then((response)=>setMangaData(response))
        .then(()=>setCheck(true))
        .catch((error)=>console.log(error))
    },[])
    return(
        <div className="detailsManga">
            <Navbar/>
            {check === true ? 
            <div className="content">
                <div className="infos">
                    <div className="mainInfos">
                        <h1 className="titre"><span>{mangaData.data.title}</span><span className="rating"><FaStar/>{mangaData.data.score}</span></h1>
                        <h1> {mangaData.data.title_japanese}</h1>
                        <h2>Synopsis :</h2>
                        <hr />
                        <p>{mangaData.data.synopsis}</p>
                        <h3>Authors : {mangaData.data.authors[0].name}</h3>
                        <h3>Genre(s) : {mangaData.data.genres.map((element,index)=>(
                            <span key={index}>{element.name+" "}</span>
                        ))}</h3>
                        <h3>Dates : <span>{mangaData.data.published.string}</span></h3>
                    </div>
                    <div className="imgContainer">
                        <img src={mangaData.data.images.jpg.large_image_url} alt="" />
                    </div>
                </div>
            </div>
            :
            <h1>Loading</h1>
            }
        </div>
    )
}
export default DetailManga