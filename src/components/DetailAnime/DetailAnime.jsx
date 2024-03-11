import Navbar from "../Navbar/Navbar"
import "./DetailAnime.sass"
import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
let DetailAnime = (props) => {
    const paramsId = useParams()
    const [themes,setThemes] = useState([])
    const [check,setCheck] = useState(false)
    useEffect(()=>{
        fetch('https://api.jikan.moe/v4/anime/'+props.data[parseInt(paramsId.id)].mal_id+'/themes')
        .then((response)=>response.json())
        .then((response)=>setThemes(response))
        .catch((error)=>console.log(error))
        setTimeout(() => {
            if(themes){
            setCheck(true)
            console.log(themes)
            }
            else{
            setCheck(false)
            }
        }, 1500);
    },[paramsId])
    // console.log(props.data[parseInt(paramsId.id)]);
    // console.log(themes);
    return(
        <div className="detailsAnime">
            <Navbar/>
            {check === true ? 
            <div className="content">
                <div className="infos">
                    <div className="mainInfos">
                        <h1 className="titre"><span>{props.data[paramsId.id].title}</span><span className="rating">{props.data[paramsId.id].score}</span></h1>
                        <h1> {props.data[paramsId.id].title_japanese}</h1>
                        <h2>Synopsis :</h2>
                        <hr />
                        <p>{props.data[paramsId.id].synopsis}</p>
                        <h3>Studio : {props.data[paramsId.id].studios[0].name}</h3>
                        <h3>Genre(s) : {props.data[paramsId.id].genres.map((element,index)=>(
                            <span key={index} className="genre">{element.name+" "}</span>
                        ))}</h3>
                        <h2>Opening :</h2>
                        <hr />
                        <ol>
                            {themes.data.openings.map((element,index)=>(
                                <li key={index}>{element}</li>
                            ))}
                        </ol>
                        <h2>Endings : </h2>
                        <hr />
                        <ol>
                            {themes.data.endings.map((element,index)=>(
                                <li key={index}>{element}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="imgContainer">
                        <img src={props.data[paramsId.id].images.jpg.large_image_url} alt="" />
                    </div>
                </div>
                    {props.data[paramsId.id].trailer.url ?
                        <div className="trailer">
                            {/* <video src={props.data[paramsId.trailer.embed_url]}></video> */}
                            <iframe width="1200px" height="700px" src={props.data[paramsId.id].trailer.embed_url} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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