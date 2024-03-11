import "./Navbar.sass"
import { NavLink } from "react-router-dom"
let Navbar = ()=>{
    return(
        <nav>
            <div className="mainTilte"> 
                <h1>MyAnime</h1>
            </div>
            <div className="links">
                <NavLink to="/"><div className="test"></div>Top Anime</NavLink>
                <NavLink to={"/topManga"}><div className="test"></div>Top Manga</NavLink>
                <NavLink to={"/topCharacters"}><div className="test"></div>Top Characters</NavLink>
            </div>
        </nav>
    )
}
export default Navbar