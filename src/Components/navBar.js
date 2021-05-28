import React from 'react';
import { Link } from 'react-router-dom';



function NavBar() {

    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/register'>
                    <li>Register</li>
                </Link>
                <Link to='/login'>
                    <li>Login</li>
                </Link>
                <Link to='/profile'>
                    <li>Profile</li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar;