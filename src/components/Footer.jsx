import React from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from "../images/logo-1.png";
const Footer = () => {
    return (
        <>
            <div className="footer row">
                <div className="col-md-6">
                        <img style={{width:'30%'}} src={logo} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                <nav className='navbar-container'>
            <ul>
            <Link to="/"> <li>Home <MdOutlineDoubleArrow/> </li></Link>
               <Link to="/orders"> <li>Orders <MdOutlineDoubleArrow/> </li></Link>
            </ul>
        </nav>
        <p className='text-right'>Designed and developed by Muhammad Asraful</p>
                </div>
            </div>
        </>
    );
};

export default Footer;