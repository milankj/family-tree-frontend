import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Upcoming from '../Upcoming/Upcoming'
function Family1(props) {
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
  console.log('des ',...users)
  return (
    <div>
      <div className='upcoming--details'>
            <div className='upcoming--header'>Upcoming Events</div>
            {users.map(user=>{
              if(user.familyName==='Karimbil')
                return(
                  <Upcoming {...user} key={user._id}/>
                  )
              else 
                  return null
              })}
        </div>
      {users.map(user => {
        if(user.familyName==='Karimbil')
          return (
            <Card {...user} key={user._id}/>
          )
        else 
            return null
      })}
      </div>
  )
}

export default Family1