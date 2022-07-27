import React,{useState} from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <img 
                className='nav--logo'
                src="https://png.pngtree.com/template/20190214/ourmid/pngtree-family-tree-symbol-icon-logo-design-template-illustration-image_55356.jpg"
                 alt='logo'/>
            <h3>Family Tree</h3>
        </div>
    )
}

export default Nav