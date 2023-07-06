import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css";
import {Button} from  "./Button"

function Navbar() {
    const [click, setClick] = useState(false);
    const [Button, setButton] =useState(true);

    const HandleClick =() => setClick(!click);
    const CloseMobileMenu = () => setClick(false)

    const ShowButton = ()=> {
        if(window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        ShowButton()
    }, []);


    window.addEventListener("resize",ShowButton);


  return (
    <>
    <nav className='Navbar'>
        <div className="navbar-container">
            <Link  to="/navbar" classNamen= "narvar-logo"  onClick={CloseMobileMenu}> 
            LOGO APLICATION <i className="fab fa-typo3"></i>
            </Link>
            <div className='menu-icon'>
             <i className={click ? "fas fas-times": "fas fas-bars"}/>
            </div>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li className='nav-intem'>
                <Link to="/Home" className='nav-links' onClick={CloseMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className='nav-intem'>
                <Link to="/Services" className='nav-links' onClick={CloseMobileMenu}>
                    Services
                </Link>
            </li>
            <li className='nav-intem'>
                <Link to="/Products" className='nav-links' onClick={CloseMobileMenu}>
                    Products
                </Link>
            </li>
            <li className='nav-intem'>
                <Link to="/Costumers" className='nav-links' onClick={CloseMobileMenu}>
                    Costumers
                </Link>
            </li>
               {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar;