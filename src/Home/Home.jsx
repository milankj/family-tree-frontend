import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
function Home({familyNames}) {
  console.log(familyNames)
  familyNames.map((familyName,index)=>{
    console.log( index+' '+familyName.familyName)
  })
  return (
    <main className='home-page'>
      {familyNames.map(familyName=>{
          return(
            <Link 
        className="home-page-link" 
        to={`/${familyName.familyName}`} key={familyName._id}>
          <button 
            className=' btn-1 pushable'>
              <span 
                className='front'>
                  {familyName.familyName}
              </span>
          </button>
      </Link>
          )
      })}
      
    </main>
  )
}

export default Home