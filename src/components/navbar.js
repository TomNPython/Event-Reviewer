import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-dark navbar-expand-md'>
            <Link to='/' className='navbar-brand'>E-Rev</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                    <li className='navbar-item'>
                        <Link to ='/' className='nav-link'>Reviews</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to ='/create' className='nav-link'>Create Review</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to ='/contact' className='nav-link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
