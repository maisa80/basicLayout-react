import React from 'react'

import { Link, NavLink } from "react-router-dom";
import WishList from './WishList';

import Categories from './Categories';
import AnnounceButton from './AnnounceButton';
import LoginLink from './LoginLink';

function Nav() {
    return (
        <nav>
            {/* a-tags makes tha page reload */}
            {/* <a href="/">Home</a> | <a href="/posts">Posts</a> | <a href="/Contact">Contact</a> */}

            {/* Use Link to navigate smoother, without reloading the page*/}
            
            <div className="left-nav">
                <Link to="/">Home</Link>
                <Categories />
            </div>
            <div className="right-nav">
                <Link to="/adverts"><AnnounceButton/></Link>
                <Link to="/wishlist"><WishList /></Link>
                <Link to="/login"><LoginLink/></Link>
            </div>
        </nav>
    )
}

export default Nav
