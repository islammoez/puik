import './Carde.css'
// import lioyd from '../images/4.-Lloyd-Natural-LLN10041-scaled.jpg';

export default function Carde(props){
    return(
        <div className="card my-3 border-0 col-lg-3 mycardfont" >
                <img src={props.images} className="card-img-top myborder" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.title} </h5>
                  <p className="card-text">{props.description}</p>
                  <p className="card-text"><span>$</span>{props.price}</p>
                  
                </div>
              </div>    
    )
}