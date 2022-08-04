import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Card.css'
export default function Card(props) {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://familytree2api.herokuapp.com/api/v1/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => setUsers(data.result))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    const navigate = useNavigate()
    const handleOnclick =  ()=>{
        navigate(`/person`)
    }
    console.log(users)
    return (
        users.map(user => {
            if(user.familyName===props.familyName)
            return (
                <main onClick={handleOnclick} className='card-main'>
                    <article className="card">
                        <img src="https://cdn-icons.flaticon.com/png/128/1144/premium/1144709.png?token=exp=1659624311~hmac=dab39502f1b252a8ee9de4cb42a85757" className="card--image" />
                        <div className="card--info">
                            <h3 className="card--name">
                                {user.fullName}
                            </h3>
                            <p className="card--contact">DOB: {user.dateofBirth}</p>
                            <p className="card--contact">{user.dateofDeath === 'N/A' ? null : user.dateofDeath}</p>
                            {/* <p className="card--contact">{user.dateofMarriage === 'N/A' ? null : 'Marriage: '+user.dateofMarriage}</p> */}
                        </div>

                    </article>
                </main>
            )
        })
    )
}