import React from 'react'
import '../style.css';

const Navbar = () => {
  return (
    <>
        <div id="navbar">
            <div className="logo">
                <img src="gallery/logo.png" alt="logo" />
            </div>
            <div className="navbar-item">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICE</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar;