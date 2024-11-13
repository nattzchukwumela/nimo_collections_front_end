
import React from 'react';
import search from '../../assets/icons/search-outline.svg'
import heart from '../../assets/icons/heart-outline.svg'
import cart from '../../assets/icons/cart-outline.svg'
import './navbar.css'


export function Navbar() {
    return (
        <header>
            <div className="logo">
                <h2>Limo-Collections</h2>
            </div>
            <nav>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Children</li>
                    <li>Latest & Trending</li>
                </ul>
            </nav>
            <div className='search-section'>
                <label>
                    <input type="search" name="search" id="search" placeholder='Search' />
                    <button type="submit" title='submit button'>
                        <img src={search} alt="" width="25px" />
                    </button>
                </label>
                <button className='nav-btn'>
                    <img src={heart} alt="" width="25px" />
                </button>
                <button className='nav-btn'>
                    <img src={cart} alt="" width="25px" />
                </button>
            </div>
        </header>
    )
}
