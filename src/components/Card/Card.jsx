import "./Card.sass"
import { Link } from "react-router-dom"
let Card = (props) => {
    return(
        <div className="card">
            <div className="imgContainer">
                <img src={props.image} alt="" />
            </div>
            <div className="infos">
                <h3>{props.titre}</h3>
                {props.episodes>0?<h4><span>épisodes : </span>{props.episodes}</h4>:props.volumes>0?<h4><span>volumes : </span>{props.volumes}</h4>:<h4><span>épisodes/volumes :</span> ?</h4>}
                <h4><span>score : </span>{props.score}</h4>
                {props.studio?<h4><span>studio : </span>{props.studio}</h4>:<h4><span>authors : </span>{props.authors}</h4>}
            </div>
            <Link to={props.link} className="more">
                plus d'info
            </Link>
        </div>
    )
}
export default Card