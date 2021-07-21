import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

                <Link to="clients" >clients</Link>
                <Link to="actions" >actions</Link>
                <Link to="analytics" >analytics</Link>

        </div>
    );
};

 
export default NavBar;
