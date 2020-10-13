import React from 'react';
import {Link} from 'react-router-dom';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },{
        title: 'Blog',
        path: '/Blog'
    },{
        title: 'Contact Us',
        path: '/Contact-us'
    },{
        title: 'Login',
        path:'/Login'
    }
]

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span className="menu-title">My React Blog</span>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index} >
                       <Link to={link.path}>{link.title}</Link>
                    </li>

                ))                    
                }
            </ul>
            <span></span>

        </nav>
    )
}