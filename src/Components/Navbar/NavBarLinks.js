import React from 'react';
import {Link} from 'react-router-dom'

const NavBarLinks = (props) => {

    const generateTitle = (str) => '' === str ? 'Clients' : str

    return (
        <Link href={'/' + props.url}> {generateTitle(props.url)} </Link>
    );
};

export default NavBarLinks;
