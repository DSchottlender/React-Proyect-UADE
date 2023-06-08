import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const CloseMobileMenu = () => setClick(false)

  return (
    <>
    <nav className='Navbar'>
        <div className="navbar-container">
            <Link  to="/" classNamen= "narvar-logo"> 
            LOGO APLICATION <i className="fab fa-typo3"></i>
            </Link>
            <div className='menu-icon'/>
             <i className={click ? "fas fas-times": "fas fas-bars"}/>
        </div>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li className='nav-intem'>
                <Link to="/" className='nav-links' onClick={closeMoileMenu}>
                    HOME
                </Link>
            </li>
            <li className='nav-intem'>
                <Link to="/" className='nav-links' onClick={closeMoileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-intem'>
                <Link to="/" className='nav-links' onClick={closeMoileMenu}>
                    Products
                </Link>
            </li>
        </ul>
    </nav>

    </>
  )
}

export default Navbar