import Navbar from "../Navbar/Navbar"
import "./DetailAnime.sass"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { FaStar } from "react-icons/fa6";
let DetailAnime = () => {
    const paramsId = useParams()
    const [check,setCheck] = useState(false)
    const [animeData,setAnimeData]=useState(null)
        useEffect(()=>{
        fetch('https://api.jikan.moe/v4/anime/'+paramsId.id+'/full')
        .then((response)=>response.json())
        .then((response)=>setAnimeData(response))
        .then(()=>setCheck(true))
        .catch((error)=>console.log(error))
    },[])
    console.log(animeData);
    return(
        <div className="detailsAnime">
            <Navbar/>
            {check === true ? 
            <div className="content">
                <div className="infos">
                    <div className="mainInfos">
                        <h1 className="titre"><span>{animeData.data.title}</span><span className="rating"><FaStar/>{animeData.data.score}</span></h1>
                        <h1> {animeData.data.title_japanese}</h1>
                        <h2>Synopsis :</h2>
                        <hr />
                        <p>{animeData.data.synopsis}</p>
                        <h3>Studio : {animeData.data.studios[0].name}</h3>
                        <h3>Genre(s) : {animeData.data.genres.map((element,index)=>(
                            <span key={index} className="genre">{element.name+" "}</span>
                        ))}</h3>
                        <h2>Opening :</h2>
                        <hr />
                        <ol>
                            {animeData.data.theme.openings.map((element,index)=>(
                                <li key={index}>{element}</li>
                            ))}
                        </ol>
                        <h2>Endings : </h2>
                        <hr />
                        <ol>
                            {animeData.data.theme.endings.map((element,index)=>(
                                <li key={index}>{element}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="imgContainer">
                        <img src={animeData.data.images.jpg.large_image_url} alt="" />
                    </div>
                </div>
                    {animeData.data.trailer.url ?
                        <div className="trailer">
                            <iframe width="1200px" height="700px" src={animeData.data.trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    :""}
            </div>
            :
            <h1>Loading</h1>
            }
        </div>
    )
}
export default DetailAnime