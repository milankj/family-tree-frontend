import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import './Nav.css'

function Nav(props) {

    const navigate = useNavigate()
    const handleClick =  ()=>{  
        navigate(`/`)
    }
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img 
                className='nav--logo'
                src="https://png.pngtree.com/template/20190214/ourmid/pngtree-family-tree-symbol-icon-logo-design-template-illustration-image_55356.jpg"
                alt='logo' 
                onClick={handleClick}
                style={{cursor:'pointer'}}/>
            <h3 
                className='nav--text' 
                onClick={handleClick} 
                style={{cursor:'pointer'}}
                >Family Tree</h3>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Nav