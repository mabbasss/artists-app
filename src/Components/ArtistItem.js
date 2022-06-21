import './ArtistItem.css'
import { Link } from "react-router-dom";


let ArtistItem = (props) => {
    // console.log(props.studentInfo);
    let Artist = props.ArtistInfo;
    // console.log(Artist);
    return (
        <div className="col-md-4 mx-auto my-5">
            <Link to={`/Artists/${Artist.id}`} >
            <div className="profile-card-2">
                <img src={`./images/covers/${Artist.cover}.jpg`} alt="" className="img img-responsive img-fluid" />
                <div className="profile-name">{Artist.name}</div>
            </div>
            </Link>
        </div>
    )
}

export default ArtistItem;