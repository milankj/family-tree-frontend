import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div className='home-page'>
      <Link 
        className="home-page-link" 
        to="/family1">
          <button 
            className=' btn-1 pushable'>
              <span 
                className='front'>
                  Family 1
              </span>
          </button>
      </Link>
      <Link 
        className="home-page-link" 
        to="/family2">
        <button 
          className=' pushable'>
          <span className='front'>
              Family 2</span>
        </button>
      </Link>
    </div>
  )
}

export default Home