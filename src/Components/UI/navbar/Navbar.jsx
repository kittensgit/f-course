import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from '../button/MyButton';
import { AuthContext } from '../../../context';

export const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Log out
            </MyButton>
            <div className="navbar__links">
                <Link to='/about'>About website</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    )
}
