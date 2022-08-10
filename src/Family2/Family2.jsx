import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import Upcoming from '../Upcoming/Upcoming'
function Family2(props) {
  console.log('des ',...props.users)
  return (
    <div>
      <div className='upcoming--details'>
            <div className='upcoming--header'>Upcoming Events</div>
            {props.users.map(user=>{
              if(user.familyName!='Karimbil')
                return(
                  <Upcoming {...user} key={user._id}/>
                  )
              else{
                return null
              }
              })}
        </div>
      {props.users.map(user => {
        if(user.familyName!='Karimbil')
          return (
            <Card {...user} key={user._id}/>
          )
        else  
            return null
      })}
      </div>
  )
}

export default Family2