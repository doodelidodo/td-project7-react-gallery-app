import React from 'react';
import { NavLink } from "react-router-dom";

const ImageList = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/dogs'>Cats</NavLink></li>
                <li><NavLink to='/cats'>Dogs</NavLink></li>
                <li><NavLink to='/birds'>Computers</NavLink></li>
            </ul>
        </nav>
    )
};

export default ImageList;