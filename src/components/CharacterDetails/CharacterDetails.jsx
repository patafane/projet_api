import "./CharacterDetails.sass"
let CharacterDetails = (props)=>{
    return(
        <div className="character">
            <img src={props.image} alt="" />
            <div className="details">
                <h2>{props.nom}</h2>
                {props.nickname.length>0 ? <h5>Nicknames : {props.nickname.map((element,index)=>(
                    <span key={index}>{"'"+element+"' "}</span>
                ))}</h5> :""}
            </div>
        </div>
    )
}
export default CharacterDetails