import React from 'react';
import logo from '../images/logo-1.png';
const Header = () => {
    return (
        <>
            <div className="row-header">
                <div className="col-md-4">
                    <h2>Manage customer Order</h2>
                    <p>Fill the all required of below form </p>
                </div>
                <div className="col-md-4 flex-img">
                <img src={logo} className="img-fluid" alt="" />
                </div>
                <div className="col-md-4 flex-end">
                <h6>A unique service ltd</h6>
                <address>Muhammadpur, Dhaka, Bangladesh</address>
                </div>
            </div>
        </>
    );
};

export default Header;