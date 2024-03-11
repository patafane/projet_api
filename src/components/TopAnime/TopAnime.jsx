import Navbar from "../Navbar/Navbar"
import { useState,useEffect } from "react"
import "./TopAnime.sass"
import Card from "../Card/Card"
let TopAnime = (props) =>{
    return(
        <div className="topAnime">
            <Navbar/>
            <div className="content">
                {props.check === true ? 
                props.data.map((element,index)=>(
                    <Card key={index} image={element.images.jpg.image_url} titre={element.title} episodes={element.episodes} score={element.score} studio={element.studios[0].name} link={"/anime/"+element.mal_id}/>
                ))
                : <h1>Loading</h1>}
            </div>
        </div>
    )
}
export default TopAnime