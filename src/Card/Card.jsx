import React from "react";
import { useNavigate,Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import './Card.css'
export default function Card(props) {
    const navigate = useNavigate()
    const handleOnclick = (id) => {
        navigate(`${location.pathname}/person?_id=${id}`)
    }
    const location = useLocation();
    console.log(location.pathname);
    return (
        <Link to={`${location.pathname}/person?_id=${props._id}`}>
        <main  key={props._id} className='card-main'>
            <article className="card">
                {props.gender === 'male' || props.gender==='Male'? <img src="../../image/man-profile-icon.png" className="card--image" /> : <img src="../../image/woman-profile-icon.png" className="card--image" />}
                <div className="card--info">
                    <h3 className="card--name">
                        {props.fullName}
                    </h3>
                    <p className="card--contact">DOB: {props.dateofBirth}</p>
                    {props.dateofDeath === 'N/A' || props.dateofDeath === 'n/a' || props.dateofDeath === 'N/a' ? null: <p className="card--contact">DOD : {props.dateofDeath}</p>}
                    {/* <p className="card--contact">{user.dateofMarriage === 'N/A' ? null : 'Marriage: '+user.dateofMarriage}</p> */}
                </div>
            </article>
        </main>
        </Link>
    )
}