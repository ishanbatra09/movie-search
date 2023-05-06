import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <nav className='navbar__nav'>
                <h3 className='nav__brand'>
                    <Link to='/'>
                        <i className='fas fa-video'>   Movie search </i>
                    </Link>
                </h3>
                < ul className='nav__links'>
                    <li className='links__links'><Link to='/'>Home</Link></li>
                    <li className='links__links'><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar;