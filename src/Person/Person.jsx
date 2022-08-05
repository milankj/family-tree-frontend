import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function Person(props) {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`https://familytree2api.herokuapp.com/api/v1/users${location.search}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((data) => setUser(data.result))
            .catch((err) => {
                console.log(err.message);
            });
    },[]);
    const location = useLocation()
    console.log(user)
    return (
        user.map(obj=>{
            return(
                <div key={obj._id}>
                    <h3>Name: {obj.fullName}</h3>
                    <p>Date of Birth: {obj.dateofBirth}</p>
                    <p>Family Name: {obj.familyName}</p>
                    {obj.dateofMarriage==='N/A'? null : <p>Date of Marriage: {obj.dateofMarriage}</p>}
                    {obj.dateofDeath==='N/A'? null : <p>Date of Death: {obj.dateofDeath}</p>}
                    {obj.spouse==='N/A'? null : <p>Spouse: {obj.spouse}</p>}
                </div>
            )
        })
    )
}