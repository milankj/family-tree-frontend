import React from 'react'
import  './Loader.css'

function Loader() {
    return (
        <div className='loadscreen loader h-100'>
            <div className='row h-100 justify-content-center align-items-center'>
                <div className="lds-roller align-items-center">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Loader