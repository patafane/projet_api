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
                <h4><span>épisodes : </span>{props.episodes}</h4>
                <h4><span>score : </span>{props.score}</h4>
                <h4><span>studio : </span>{props.studio}</h4>
            </div>
            <Link to={"/anime/"+props.id} className="more">
                plus d'info
            </Link>
        </div>
    )
}
export default Card