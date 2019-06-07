import React from 'react'
import houserLogo from '../houser_logo.png'

const Header = () => {
   
        return ( 
            <div className="Header">
                <img src={houserLogo} alt="shelfie logo" />
                <h2 className="title">Houser</h2>
            </div>
        )
  
}

export default Header
