import React from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <ul>
               <Link to="/"> <li>Home <MdOutlineDoubleArrow/> </li></Link>
               <Link to="/orders"> <li>Orders <MdOutlineDoubleArrow/> </li></Link>
            
            </ul>
        </nav>
    );
};

export default Navbar;