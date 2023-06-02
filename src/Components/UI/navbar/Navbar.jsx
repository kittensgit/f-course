import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to='/about'>About website</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    )
}
